from django.urls import URLPattern, path
from .views import *

urlpatterns = [
    path('', get_routes, name='get_routes'),
    path('clubs/', get_clubs, name='get_clubs'),
    path('clubs/<str:pk>', get_club, name='get_club'),
    # path('clubs/table', get_tour_table, name='tour_table')
]