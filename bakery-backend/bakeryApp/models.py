from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
    
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.CharField(max_length=2000)  # Use URLField to store the image URL
    category = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    is_veg = models.BooleanField(default=True)  # Indicates whether the product is vegetarian
    serves = models.CharField(max_length=50)
    availability = models.BooleanField(default=True)  # Indicates whether the product is available

    def __str__(self):
        return self.name
    
class CustomUserManager(BaseUserManager):
    def create_user(self, email, phone_number, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        extra_fields.setdefault("is_active", True)
        user = self.model(email=email, phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, phone_number, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, phone_number, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    address = models.TextField(blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["phone_number"]

    def __str__(self):
        return self.email
    
class Order(models.Model):
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    address = models.TextField(blank=True)
    date = models.DateTimeField(auto_now_add=True)
    delivery_status = models.CharField(max_length=50)
    payment_mode = models.CharField(max_length=50, blank=True)
    owner = models.ForeignKey('CustomUser', on_delete=models.CASCADE, null=True)

 
class Cart(models.Model):
    owner = models.ForeignKey('CustomUser', on_delete=models.CASCADE)  # Replace with your user model
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class CartItem(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE, null=True) # Ensure uniqueness of product within a cart

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"


