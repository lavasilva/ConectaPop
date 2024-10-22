from django.urls import path
from . import views

app_name = 'Aplicacao'

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('relatar_problemas/', views.relatar_problemas.as_view(), name='relatar_problemas'),
    path('enquetes/', views.enquetes.as_view(), name='enquetes'),
    path('atualizacoes/', views.atualizacoes.as_view(), name='atualizacoes'),
    path('login/', views.login.as_view(), name='login'),
    path('registro/', views.RegistroView.as_view(), name='registro'),
    path('home_adm/', views.HomeAdmView.as_view(), name='home_adm'),
    path('relatorio_progresso/', views.relatorio_progresso.as_view(), name='relatorio_progresso'),
    path('deletar_relatorio/<int:relatorio_id>/', views.DeletarRelatorio.as_view(), name='deletar_relatorio'),
    path('cleanup_db/', views.cleanup_db, name='cleanup_db'), #Rota de limpeza para o banco de dados!
]