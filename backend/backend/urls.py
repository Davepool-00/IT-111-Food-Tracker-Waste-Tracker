"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from tracker.views import (
    FoodItemListCreateView, OrganizationListCreateView, DonationListCreateView, RegisterUserView
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Food Donation API Endpoints
    path('api/fooditems/', FoodItemListCreateView.as_view(), name='fooditem-list'),
    path('api/organizations/', OrganizationListCreateView.as_view(), name='organization-list'),
    path('api/donations/', DonationListCreateView.as_view(), name='donation-list'),

    # User Registration & Authentication
    path('api/register/', RegisterUserView.as_view(), name='register'),
    path('api/login/', TokenObtainPairView.as_view(), name='login'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
