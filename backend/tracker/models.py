from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Custom user model to handle different roles
class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('donor', 'Donor'),
        ('receiver', 'Receiver'),
        ('admin', 'Admin'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='donor')

    groups = models.ManyToManyField(Group, related_name="customuser_groups", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="customuser_permissions", blank=True)

    def __str__(self):
        return f"{self.username} ({self.role})"

# FoodItem Model (Tracks excess food)
class FoodItem(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.IntegerField()
    expiry_date = models.DateField(null=True, blank=True)
    status = models.CharField(
        max_length=50,
        choices=[('available', 'Available'), ('donated', 'Donated')],
        default='available'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    donor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="donations", null=True, blank=True)

    def __str__(self):
        return self.name

# Organization Model (Food receivers)
class Organization(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    contact = models.CharField(max_length=100)
    receiver = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="organizations", null=True, blank=True)

    def __str__(self):
        return self.name

# Donation Model (Links Food to an Organization)
class Donation(models.Model):
    food_item = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, null=True, blank=True)
    donated_at = models.DateTimeField(auto_now_add=True,)

    def __str__(self):
        return f"{self.food_item.name} donated to {self.organization.name if self.organization else 'Unknown'}"
