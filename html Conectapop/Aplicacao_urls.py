from django.urls import path
from . import views

app_name = 'Aplicacao'

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('relatar_problemas/', views.relatar_problemas.as_view(), name='relatar_problemas'),
    path('enquetes/', views.enquetes.as_view(), name='enquetes'),
    path('atualizacoes/', views.atualizacoes.as_view(), name='atualizacoes'),
]
