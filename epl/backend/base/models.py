from django.db import models

class Club(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField()
    description = models.TextField(max_length=500)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    liga = models.CharField(max_length=255)
    founded = models.CharField(max_length=255)
    Coach = models.CharField(max_length=255)
    rating = models.DecimalField(max_digits=7, decimal_places=2)
    stadion = models.CharField(max_length=255)
    webSait = models.CharField(max_length=255)
    _id = models.AutoField(primary_key=True, editable=False)


    def __str__(self):
        return self.name

# скоро реализуем
class Tournament_table(models.Model):
    club = models.ForeignKey(Club, on_delete=models.SET_NULL, null=True, default=True)
    games = models.IntegerField()
    score = models.IntegerField() 

