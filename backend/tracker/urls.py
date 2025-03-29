from django.urls import path
from .views import DonationListCreateView, DonationDetailView

urlpatterns = [
    path('donations/', DonationListCreateView.as_view(), name='donation-list'),
    path('donations/<int:pk>/', DonationDetailView.as_view(), name='donation-detail'),
]
