from django.contrib import admin
from django.urls import path
from users.views import *

urlpatterns = [
    # path('', Home_View.as_view() , name="Home_View"   ),
    path("", usersHome.as_view(), name="usersHome"),
    path("signup/", usersSignUp.as_view(), name="usersSignUp"),
    path("login/", usersLogin.as_view(), name="usersLogin"),
]
