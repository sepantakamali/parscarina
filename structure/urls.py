"""Defines URL patterns for structure."""

from django.urls import path

from . import views

app_name = 'structure'
urlpatterns = [
    # Home page.
    path('', views.homepage, name='homepage'),
    path('persian', views.persian_homepage, name='persian_homepage')
]