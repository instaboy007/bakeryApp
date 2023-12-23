from django.urls import path
from . import views

urlpatterns = [
    path('api/products', views.getProducts, name='getProducts'),
    path('api/create-user/', views.createUser, name='createUser'),
    path('api/login-user/', views.loginUser, name='loginUser'),
    path('api/user-details/', views.getUserDetails, name='getUserDetails'),
    path('api/create-order/', views.create_order, name="create_order")
]