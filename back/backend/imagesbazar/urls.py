from django.contrib import admin
from django.urls import path

from imagesbazar.views import *

urlpatterns = [
    path("addFavorite/", addFavorite_view.as_view(), name="addFavorite_view"),
    path(
        "deleteFavorite/<str:userId>/<str:imageId>",
        deleteFavorite_view.as_view(),
        name="deleteFavorite_view",
    ),
    path("addHistory/", addHistory_view.as_view(), name="addHistory_view"),
    path(
        "deleteHistory/<str:userId>/<str:imageId>",
        deleteHistory_view.as_view(),
        name="deleteHistory_view",
    ),
]
