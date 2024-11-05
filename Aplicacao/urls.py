from django.urls import path
from . import views
from .views import OportunidadeProjetos
from .views import DocumentosProjetos
from .views import StatusReformas

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
    path('alerta_seguranca/', views.alerta_seguranca, name='alerta_seguranca'),
    path('deletar_violacao/<int:id>/', views.deletar_violacao, name='deletar_violacao'),
    path('oportunidade_projetos/', OportunidadeProjetos.as_view(), name='oportunidade_projetos'),
    path('documentos_projetos/', DocumentosProjetos.as_view(), name='documentos_projetos'),
    path('status_reformas/', StatusReformas.as_view(), name='status_reformas'),
    path('detalhes_relatorio/<int:relatorio_id>/', views.DetalhesRelatorio.as_view(), name='detalhes_relatorio'),

]

urlpatterns += [
    path('cleanup_db/', views.cleanup_db, name='cleanup_db'), 
]

urlpatterns += [
    path('limpar_problemas/', views.limpar_problemas, name='limpar_problemas'),
]