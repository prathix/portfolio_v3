from django.shortcuts import render
from .models import Projects

# Create your views here.
def index(request):
    items = Projects.objects.all()
    return render(request, "portfolio_templ/index.html", {'items': items})