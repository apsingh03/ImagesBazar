from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response

from imagesbazar.models import *


# Create your views here.
class addFavorite_view(APIView):
    def post(self, request):
        imageIdd = request.data["imageId"]
        imageUrll = request.data["imageUrl"]
        userIdd = request.data["userId"]

        if not Favorites.objects.filter(imageId=imageIdd, userId_id=userIdd).exists():
            Favorites.objects.create(
                imageId=imageIdd, imageUrl=imageUrll, userId_id=userIdd
            )
            # print("data added")

            return Response({"msg": "Data Inserted Successfully"})

        else:
            return Response({"msg": "Image Already exists"})

    def get(self, request):
        data = Favorites.objects.values()

        return Response({"msg": "Working ", "data": data})


class deleteFavorite_view(APIView):
    def delete(self, request, userId, imageId):
        if Favorites.objects.filter(imageId=imageId, userId_id=userId).exists():
            query = Favorites.objects.filter(imageId=imageId, userId_id=userId)
            query.delete()

            return Response({"msg": "Data Deleted"})

        else:
            return Response({"msg": "Wrong Data"})


# Create your views here.
class addHistory_view(APIView):
    def post(self, request):
        imageIdd = request.data["imageId"]
        imageUrll = request.data["imageUrl"]
        userIdd = request.data["userId"]

        if not ImageHistory.objects.filter(
            imageId=imageIdd, userId_id=userIdd
        ).exists():
            ImageHistory.objects.create(
                imageId=imageIdd, imageUrl=imageUrll, userId_id=userIdd
            )
            # print("data added")

            return Response({"msg": "Data Inserted Successfully"})

        else:
            return Response({"msg": "Image Already Downloaded"})

    def get(self, request):
        data = ImageHistory.objects.values()

        return Response({"msg": "Working ", "data": data})


class deleteHistory_view(APIView):
    def delete(self, request, userId, imageId):
        if ImageHistory.objects.filter(imageId=imageId, userId_id=userId).exists():
            query = ImageHistory.objects.filter(imageId=imageId, userId_id=userId)
            query.delete()

            return Response({"msg": "Data Deleted"})

        else:
            return Response({"msg": "Wrong Data"})
