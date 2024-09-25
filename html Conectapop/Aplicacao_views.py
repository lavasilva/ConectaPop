from django.shortcuts import redirect, render
from django.views import View
from .models import Relatar

class HomeView(View):
    def get(self, request):
        return render(request, 'home.html')
    
class relatar_problemas(View):
    def get(self, request):
        return render(request, 'relatar_problemas.html')
    
    def post(self, request):
        titulo = request.POST.get("titulo")
        descricao = request.POST.get("descricao")
        problema = request.POST.get("problema")
        endereco = request.POST.get("endereco")
        cidade = request.POST.get("cidade")
        estado = request.POST.get("estado")
        cep = request.POST.get("cep")
        foto = request.POST.get("foto")

        relatar = Relatar(
            titulo = titulo,
            descricao = descricao,
            problema = problema,
            endereco = endereco,
            cidade = cidade,
            estado = estado,
            cep = cep,
            foto = foto
        )

        relatar.save()

        return redirect('Aplicacao:home')
