from django.shortcuts import render , get_object_or_404
from .models import Product, Category

# Create your views here.

def home(request):

    prod = Product.objects.all()

    categories = Category.objects.all()

    top_collection = Product.objects.all()[0:8]
    return render(request, 'home.html',{'prod':prod, 'top_collection':top_collection,'categories' : categories })

def base(request):
    categories = Category.objects.all()

    return render(request, 'base.html',{'categories' : categories })


def shop(request):

    category = request.GET.get('category')

    if category == None:
        prod = Product.objects.all()
    else:
        prod = Product.objects.filter(category__title=category)

    categories = Category.objects.all()


   
    




    return render(request, 'shop.html', {'prod':prod, 'categories' : categories })

def serach(request):


    
    if request.method == 'GET':
        query = request.GET.get('search')
        if query:
            prod = Product.objects.filter(title__icontains=query) 
            categories = Category.objects.all()
            return render(request, 'serach.html', {'prod':prod, 'categories' : categories })
        else:
            print("No information to show")
            categories = Category.objects.all()
            return render(request, 'serach.html', {'categories' : categories})





    # search = request.GET.get['search']
    
    # prod = Product.objects.filter(category_title__icontains=search).order_by('-id')

    # return render(request, 'shop.html',{ 'prod':prod ,})

def contact(request):
    categories = Category.objects.all()

    return render(request, 'contact.html', {'categories' : categories})

def aboutus(request):
    categories = Category.objects.all()

    return render(request, 'about.html', {'categories' : categories})


def prod_detail(request, id):
    categories = Category.objects.all()

    product = Product.objects.get(id=id)

    related_prod = Product.objects.exclude(id=id)

    return render(request, 'prod_detail.html', {
        'product': product,
        'categories': categories,
        'related_prod': related_prod
    })
