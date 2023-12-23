from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse

from bakeryApp.models import Product, Order, CartItem, Cart

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password, check_password

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
import traceback

User = get_user_model()
CustomUser = get_user_model()  # Import your custom user model

@api_view(['POST'])
def createUser(request):
    if request.method == 'POST':
        # Deserialize user data from the request
        email = request.data.get('email')
        phone_number = request.data.get('phone_number')
        password = request.data.get('password')

        # Perform validation and error handling (customize as needed)
        if not email or not phone_number or not password:
            return Response({'error': 'Please provide all required data.'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the user already exists (customize this check)
        if CustomUser.objects.filter(email=email).exists():
            return Response({'error': 'User with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        # Hash the user's password securely
        hashed_password = make_password(password)

        # Create a new CustomUser instance and save it to the database
        user = CustomUser(email=email, phone_number=phone_number, password=hashed_password)
        user.save()

        # Generate a JWT token for the newly registered user
        refresh = RefreshToken.for_user(user)

        # Return a success response with the JWT token
        return Response({'message': 'User registered successfully', 'access_token': str(refresh.access_token), 'refresh_token': str(refresh)}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def loginUser(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')


        # Authenticate the user
        user = authenticate(request, username=email, password=password)

        if user is not None:
            # Login the user
            login(request, user)

            # Generate a JWT token for the user
            refresh = RefreshToken.for_user(user)

            # Return a success response with the JWT token
            return JsonResponse({'message': 'Login successful', 'access_token': str(refresh.access_token), 'refresh_token': str(refresh)})
        else:
            return JsonResponse({'error': 'Login failed'}, status=401)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    
@api_view(['POST'])
def getUserDetails(request):
    if request.method == 'POST':
        # Deserialize user data from the request
        user_id = request.data.get('user_id')
        try:
            user_id = int(user_id)
        except ValueError:
            return JsonResponse({'error': 'Invalid user_id'}, status=400)
        try: 
            user = CustomUser.objects.get(id=user_id)
        except CustomUser.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        
        user_details = {
            'email': user.email,
            'phone_number': user.phone_number
        }

        return JsonResponse({'message': 'Fetching User details successfull', 'user_details': user_details})


@api_view(['POST'])
def create_order(request):
    if request.method == 'POST':
        order_data = request.data  # This will contain the order data sent from the frontend

        try:
            user_id = order_data.get('user_id')
            user = CustomUser.objects.get(id=user_id)  # Retrieve the user
            # Create a Cart for the user

            cart = Cart(owner=user)
            cart.save()

            # Now, you need to process the cart items and associate them with the order.
            cart_items_data = order_data.get('cart', {}).get('cartItems', [])
            for cart_item_data in cart_items_data:
                product_data = cart_item_data.get('product')
                quantity = cart_item_data.get('quantity')
                
                try:
                    # Try to find the existing product
                    product = Product.objects.get(name=product_data['name'])
                except Product.DoesNotExist:
                    # If the product doesn't exist, you can handle this case here
                    return Response({'error': f'Product {product_data["name"]} does not exist'}, status=status.HTTP_400_BAD_REQUEST)

                # Create a CartItem for the order
                cart_item = CartItem(
                    product=product,
                    quantity=quantity,
                    cart = cart
                )

                cart_item.save()

                # Add the CartItem to the Cart
                # cart.cart_items.add(cart_item)
            print("Saved")

            # Create an Order and associate it with the cart
            order = Order(
                amount=order_data.get('amount'),
                address=order_data.get('address'),
                delivery_status=order_data.get('delivery_status'),
                payment_mode=order_data.get('payment_mode'),
                cart=cart,
                owner=user  # Associate the order with the cart
            )
            order.save()

            # Your order, cart, and cart items are now created and associated.
            return Response({'message': 'Order created successfully'}, status=status.HTTP_201_CREATED)

        except CustomUser.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            print(e)
            # Handle any exceptions that may occur during order creation
            return Response({'error': 'Failed to create the order'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({'error': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def createOrder(request):
    if request.method == 'POST':
        amount = request.data.get('amount')
        address = request.data.get('address')
        delivery_status= request.data.get('delivery_status')
        payment_mode = request.data.get('payment_mode')
        cart_id = request.data.get('cart_id')

        if not amount or not address or not delivery_status or not payment_mode or not cart_id:
            return Response({'error': 'Please provide all required data.'}, status=status.HTTP_400_BAD_REQUEST)

        order = Order.objects.create(
            cart_id=cart_id,
            amount=amount,
            address=address,
            delivery_status=delivery_status,
            payment_mode=payment_mode
        )

        order.save()

        return Response({'message': 'Order Created Successfully'}, status=status.HTTP_201_CREATED)


def getProducts(request):
    # Retrieve all objects from the MyModel table
    all_objects = Product.objects.all()
    # Serialize the queryset to JSON
    serialized_data = serializers.serialize('json', all_objects)
    # Return the JSON data as a response
    return JsonResponse(serialized_data, safe=False)
