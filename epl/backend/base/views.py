from re import I
from django.shortcuts import render
from django.http import JsonResponse
# from .clubs import clubs
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Club, Tournament_table
from .serializers import *


@api_view(['GET'])
def get_routes(request):
    return Response('Hello, World!')

@api_view(['GET'])
def get_clubs(request):
    clubs = Club.objects.all()
    serializer = ClubSerializer(clubs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_club(request, pk):
    club = Club.objects.get(_id=pk)
    serializer = ClubSerializer(club, many=False)
    return Response(serializer.data)


# def get_tour_table(request):
#     table = Tournament_table.objects.order_by['score']
#     serializer = TableSerializer(table, many=True)
#     return (serializer.data)
