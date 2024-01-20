from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

from users.models import User

from django.contrib.auth import authenticate


class usersHome(APIView):
    def get(self, request):
        userModel = User.objects.values()

        return Response({"msg": "working users", "data": userModel})


class usersSignUp(APIView):
    def post(self, request):
        userEmail = request.data["email"]
        userPassword = request.data["password"]

        print("request - ", userEmail, userPassword)

        if not User.objects.filter(email=userEmail).exists():
            User.objects.create(email=userEmail, password=userPassword)

            print("creating")
            return Response({"msg": "userRegistration Successfull"})
        else:
            return Response({"msg": "user already exists"})


class usersLogin(APIView):
    def post(self, request):
        userEmail = request.data["email"]
        userPassword = request.data["password"]

        print("user login ", userEmail, userPassword)

        if User.objects.filter(email=userEmail).exists():
            adminUser = authenticate(email=userEmail, password=userPassword)

            if adminUser is not None:
                userModel = User.objects.filter(email=userEmail).values()

                return Response({"msg": "SignIn Successfull", "data": userModel})
            else:
                return Response({"msg": "password Wrong"})

        else:
            return Response({"msg": "email doesn't Exist"})
