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



class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="product_imgs/")

    def __str__(self):
        return f"{self.product.title} Image"