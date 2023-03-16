from django.db import models

# Create your models here.

# category

class Category(models.Model):
    title=models.CharField(max_length=100)

    def __str__(self):
        return self.title
    

# Product Model
class Product(models.Model):
    title=models.CharField(max_length=200)
    desc=models.TextField()
    image=models.ImageField(upload_to="product_imgs/",null=True)
    category=models.ForeignKey(Category,on_delete=models.CASCADE)

    def __str__(self):
        return self.title



