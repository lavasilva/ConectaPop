from django.shortcuts import redirect, render
from django.views import View
from django.contrib.auth.models import User
from django.contrib import messages
from .models import Relatar, Enquetes
from django.contrib.auth import authenticate, login as auth_login

class HomeView(View):
    def get(self, request):
        return render(request, 'home.html')

class HomeAdmView(View):
    def get(self, request):
        return render(request, 'home_adm.html')

class relatar_problemas(View):  # Se o nome da classe for diferente, ajuste aqui
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
        problema = Relatar.objects.filter(endereco=endereco).first()

        if problema:
            return render(request, 'atualizacoes.html', {'problema': problema})
        else:
            mensagem = "O endereço informado não possui ocorrências de problemas."
            return render(request, 'atualizacoes.html', {'mensagem': mensagem})

class login(View):
    def get(self, request):
        return render(request, 'login.html')

    def post(self, request):
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        
        # Autentica o usuário
        user = authenticate(request, username=email, password=senha)
        
        if user is not None:
            # Se a autenticação for bem-sucedida, faz login
            auth_login(request, user)
            return redirect('Aplicacao:home_adm')  # Redireciona para a página inicial
        else:
            messages.error(request, "Email ou senha incorretos.")
            return redirect('Aplicacao:login')

class RegistroView(View):
    def get(self, request):
        return render(request, 'registro.html')

    def post(self, request):
        nome = request.POST.get('nome')
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        confirmar_senha = request.POST.get('confirmar_senha')

        # Verifica se o email termina com "@conecta.pop"
        if not email.endswith('@conecta.pop'):
            messages.error(request, "O email deve terminar com '@conecta.pop'.")
            return redirect('Aplicacao:registro')

        # Verifica se as senhas são iguais
        if senha != confirmar_senha:
            messages.error(request, "As senhas não coincidem.")
            return redirect('Aplicacao:registro')

        # Criação do usuário
        try:
            user = User.objects.create_user(username=email, email=email, password=senha)
            user.first_name = nome
            user.save()
            messages.success(request, "Registro realizado com sucesso! Faça login.")
            return redirect('Aplicacao:login')
        except Exception as e:
            messages.error(request, "Erro ao registrar. Tente novamente.")
            return redirect('Aplicacao:registro')
