from django.shortcuts import redirect, render, get_object_or_404
from django.views import View
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.models import User
from django.contrib import messages
from .models import Relatar, Enquetes
from .models import Relatorio
from .models import Violacao
from django.db.models import Q 
from django.contrib.auth import authenticate, login as auth_login
from django.http import JsonResponse
from .models import Vaga

class HomeView(View):
    def get(self, request):
        return render(request, 'home.html')

class HomeAdmView(View):
    def get(self, request):
        return render(request, 'home_adm.html')

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
        mensagem = None  

        if endereco:  
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
        
        
        user = authenticate(request, username=email, password=senha)
        
        if user is not None:
            
            auth_login(request, user)
            return redirect('Aplicacao:home_adm')  
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

        
        if not email.endswith('@conecta.pop'):
            messages.error(request, "O email deve terminar com '@conecta.pop'.")
            return redirect('Aplicacao:registro')

        
        if senha != confirmar_senha:
            messages.error(request, "As senhas não coincidem.")
            return redirect('Aplicacao:registro')

        
        try:
            user = User.objects.create_user(username=email, email=email, password=senha)
            user.first_name = nome
            user.save()
            messages.success(request, "Registro realizado com sucesso! Faça login.")
            return redirect('Aplicacao:login')
        except Exception as e:
            messages.error(request, "Erro ao registrar. Tente novamente.")
            return redirect('Aplicacao:registro')
        
class relatorio_progresso(View):
    def get(self, request):
        relatorios = Relatorio.objects.all()  
        return render(request, 'relatorio_progresso.html', {'relatorios': relatorios})

    def post(self, request):
        titulo = request.POST.get('tituloRelatorio')
        descricao = request.POST.get('descricaoProgresso')
        data = request.POST.get('dataRelatorio')
        status = request.POST.get('statusProjeto')
        validacao = request.POST.get('validacaoRelatorio')
        comentarios = request.POST.get('comentariosAuditor')

        relatorio = Relatorio(
            titulo=titulo,
            descricao=descricao,
            data=data,
            status=status,
            validacao=validacao,
            comentarios=comentarios
        )
        relatorio.save()
        return redirect('Aplicacao:relatorio_progresso')

class DeletarRelatorio(View):
    def post(self, request, relatorio_id):
        relatorio = get_object_or_404(Relatorio, id=relatorio_id)
        relatorio.delete()
        return redirect('Aplicacao:relatorio_progresso')

def alerta_seguranca(request):
    if request.method == 'POST':
        endereco = request.POST.get('endereco')
        servico = request.POST.get('servico')
        violacao = request.POST.get('violacao')

        nova_violacao = Violacao(endereco=endereco, servico=servico, violacao=violacao)
        nova_violacao.save()

        return redirect('Aplicacao:alerta_seguranca')  

    
    busca = request.GET.get('busca', '')
    if busca:
        historico = Violacao.objects.filter(
            Q(endereco__icontains=busca) | Q(servico__icontains=busca)
        )
    else:
        historico = Violacao.objects.all()

    return render(request, 'alerta_seguranca.html', {'historico': historico})


def deletar_violacao(request, id):
    violacao = get_object_or_404(Violacao, id=id)
    violacao.delete()
    return redirect('Aplicacao:alerta_seguranca')

def cleanup_db(request):
    Relatar.objects.filter(titulo='Teste de Problema', cep='50080160').delete()
    return JsonResponse({'status': 'specific data cleaned'})

def limpar_problemas(request):
    endereco = request.GET.get('endereco', None)
    if endereco:
        Relatar.objects.filter(endereco=endereco).delete()
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'no address provided'}, status=400)
    
class DocumentosProjetos(View):
    def get(self, request):
        return render(request, 'documentos_projetos.html')
    
class StatusReformas(View):
    def get(self, request):
        relatorios = Relatorio.objects.all()
        return render(request, 'status_reformas.html', {'relatorios': relatorios})

class DetalhesRelatorio(View):
    def get(self, request, relatorio_id):
        relatorio = get_object_or_404(Relatorio, id=relatorio_id)
        return render(request, 'detalhes_relatorio.html', {'relatorio': relatorio})



def anunciar_vaga(request):
    if request.method == 'POST':
        # Pega os dados diretamente do formulário
        titulo_vaga = request.POST['titulo_vaga']
        descricao_vaga = request.POST['descricao_vaga']
        pretensao_salarial = request.POST['pretensao_salarial']
        tempo_vaga = request.POST['tempo_vaga']
        nivel_escolaridade = request.POST['nivel_escolaridade']
        email_contato = request.POST['email_contato']

        # Aqui você pode adicionar validações extras, por exemplo, verificar se o e-mail é válido
        if '@' not in email_contato:
            # Se o e-mail for inválido, podemos adicionar um erro na resposta
            return render(request, 'vagas_trabalho.html', {'error': 'E-mail inválido!'})

        # Cria e salva a vaga no banco de dados
        vaga = Vaga.objects.create(
            titulo_vaga=titulo_vaga,
            descricao_vaga=descricao_vaga,
            pretensao_salarial=pretensao_salarial,
            tempo_vaga=tempo_vaga,
            nivel_escolaridade=nivel_escolaridade,
            email_contato=email_contato
        )

        # Redireciona para outra página ou para a mesma página com uma mensagem de sucesso
        return redirect('Aplicacao:anunciar_vaga')  # Você pode criar uma view de sucesso ou apenas redirecionar para a lista de vagas.

    # Se o método for GET, renderiza o formulário vazio
    return render(request, 'vagas_trabalho.html')
