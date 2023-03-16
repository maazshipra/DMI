from django.urls import path
from . import views 

urlpatterns = [
    path('',views.home, name='home' ),
    
    path('shop',views.shop, name='shop' ),
    path('prod_detail/<str:id>',views.prod_detail, name='prod_detail' ),
    path('aboutus',views.aboutus, name='aboutus' ),
    path('contact',views.contact, name='contact' ),
    path('base',views.base, name='base' ),
    path('search',views.serach, name='search'),
]