from django.db import models

class Projects(models.Model):
    CATEGORY_CHOICES = [
        ('web', 'Web Development'),
        ('ai', 'AI Development'),
        ('game', 'Game Development'),
        ('miscellaneous', 'miscellaneous'),
        # Add more categories as needed
    ]

    category = models.CharField(max_length=15, choices=CATEGORY_CHOICES)

    title = models.CharField(max_length = 32)
    short_description = models.CharField(max_length = 250)
    link = models.URLField(max_length = 200)
    image = models.ImageField(upload_to='portfoliov3/images/')