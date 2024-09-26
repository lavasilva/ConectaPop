from django.shortcuts import redirect, render
from django.views import View
from .models import Relatar, Enquetes

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
            titulo=titulo,
            descricao=descricao,
            problema=problema,
            endereco=endereco,
            cidade=cidade,
            estado=estado,
            cep=cep,
            foto=foto
        )

        relatar.save()
        return redirect('Aplicacao:home')
    
class enquetes(View):
    def get(self, request):
        return render(request, 'enquetes.html')
    
    def post(self, request):
        nome = request.POST.get("nome")
        idade = request.POST.get("idade")
        endereco = request.POST.get("endereco")
        mensagem = request.POST.get("mensagem")
        opcao1 = request.POST.get("opcao1")
        opcao2 = request.POST.get("opcao2")
        opcao3 = request.POST.get("opcao3")

        enquete = Enquetes(
            nome=nome,
            idade=idade,
            endereco=endereco,
            mensagem=mensagem,
            opcao1=opcao1,
            opcao2=opcao2,
            opcao3=opcao3,
        )

        enquete.save()
        return redirect('Aplicacao:home')
    
class atualizacoes(View):
    def get(self, request):
        endereco = request.GET.get('endereco')
        problema = Relatar.objects.filter(endereco=endereco).first()  # Busca o primeiro problema pelo endereço
        
        if problema:
            return render(request, 'atualizacoes.html', {'problema': problema})
        else:
            mensagem = "O endereço informado não possui ocorrências de problemas."
            return render(request, 'atualizacoes.html', {'mensagem': mensagem})
