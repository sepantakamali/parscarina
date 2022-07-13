from django.shortcuts import render

def homepage(request):
    """The homepage for parscarina."""
    return render(request, 'structure/homepage.html')

def persian_homepage(request):
    """The homepage for parscarina."""
    return render(request, 'structure/persian_homepage.html')
