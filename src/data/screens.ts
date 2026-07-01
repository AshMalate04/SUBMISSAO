
import {
  LayoutDashboard, Home, FolderOpen, FileText, ClipboardCheck, FileCheck, Users, CalendarDays,
  Scale, UserCog, ShieldCheck, Layers, Bell, BarChart3, FileArchive, LockKeyhole, MailCheck,
  KeyRound, UserPlus, Search, Eye, GanttChartSquare
} from 'lucide-react';

export type ScreenKind = 'dashboard'|'table'|'form'|'detail'|'auth'|'empty'|'loading'|'report'|'permissions';
export type Screen = { id:string; title:string; subtitle:string; group:string; kind:ScreenKind; icon:any; toast?:'success'|'error'|'warning'; modal?:'delete'|'submit'|'success'|'error'|'access'; };

export const screens: Screen[] = [
  { id:'dashboard-geral', title:'Painel geral', subtitle:'Indicadores gerais e atalhos do sistema.', group:'Painéis', kind:'dashboard', icon:LayoutDashboard },
  { id:'dashboard-pesquisador', title:'Painel do pesquisador', subtitle:'Acompanhe as suas submissões e pendências.', group:'Painéis', kind:'dashboard', icon:Home },
  { id:'dashboard-secretariado', title:'Painel do secretariado', subtitle:'Triagem documental, agenda e tramitação.', group:'Painéis', kind:'dashboard', icon:FolderOpen },
  { id:'dashboard-avaliador', title:'Painel do avaliador', subtitle:'Projectos atribuídos, conflitos e pareceres.', group:'Painéis', kind:'dashboard', icon:ClipboardCheck },

  { id:'submissoes-lista', title:'Submissões', subtitle:'Consultar, filtrar e acompanhar processos.', group:'Submissões', kind:'table', icon:FileText },
  { id:'nova-submissao', title:'Nova submissão', subtitle:'Registar e preparar um novo processo.', group:'Submissões', kind:'form', icon:FileText },
  { id:'minhas-submissoes', title:'Minhas submissões', subtitle:'Lista de projectos submetidos pelo pesquisador.', group:'Submissões', kind:'table', icon:FolderOpen },
  { id:'detalhe-submissao', title:'Detalhe da submissão', subtitle:'Acompanhar tramitação, documentos e histórico.', group:'Submissões', kind:'detail', icon:Search },
  { id:'validar-checklist', title:'Validar checklist', subtitle:'Verificação documental inicial pela unidade orgânica.', group:'Submissões', kind:'form', icon:ClipboardCheck },
  { id:'triagem-documental', title:'Triagem documental', subtitle:'Triagem e observações do secretariado.', group:'Submissões', kind:'form', icon:FileCheck },
  { id:'anonimizacao', title:'Anonimização', subtitle:'Preparação da versão cega para avaliação.', group:'Submissões', kind:'form', icon:FileCheck },

  { id:'avaliacoes-lista', title:'Avaliações atribuídas', subtitle:'Visualizar projectos distribuídos aos avaliadores.', group:'Avaliação', kind:'table', icon:ClipboardCheck },
  { id:'distribuir-avaliadores', title:'Distribuir avaliadores', subtitle:'Atribuir membros e painelistas ao processo.', group:'Avaliação', kind:'form', icon:Users },
  { id:'conflito-interesse', title:'Conflito de interesse', subtitle:'Declaração do avaliador antes da análise.', group:'Avaliação', kind:'form', icon:ShieldCheck },
  { id:'avaliar-projecto', title:'Avaliar projecto', subtitle:'Emitir observações e parecer técnico.', group:'Avaliação', kind:'form', icon:ClipboardCheck },
  { id:'emitir-parecer', title:'Emitir parecer', subtitle:'Produzir parecer individual ou especializado.', group:'Avaliação', kind:'form', icon:FileCheck },
  { id:'pareceres-lista', title:'Pareceres', subtitle:'Consultar pareceres emitidos e estados.', group:'Avaliação', kind:'table', icon:FileCheck },

  { id:'sessoes-cep', title:'Sessões do CEP', subtitle:'Agenda, presença e organização das sessões.', group:'Sessões e Deliberação', kind:'table', icon:CalendarDays },
  { id:'nova-sessao', title:'Nova sessão', subtitle:'Agendar sessão ordinária ou extraordinária.', group:'Sessões e Deliberação', kind:'form', icon:CalendarDays },
  { id:'acta-sessao', title:'Acta da sessão', subtitle:'Registo formal da sessão do comité.', group:'Sessões e Deliberação', kind:'form', icon:FileText },
  { id:'deliberar-processo', title:'Deliberar processo', subtitle:'Decisão final do comité sobre o processo.', group:'Sessões e Deliberação', kind:'form', icon:Scale },
  { id:'parecer-final', title:'Parecer final', subtitle:'Gerar e validar parecer oficial.', group:'Sessões e Deliberação', kind:'detail', icon:FileCheck },

  { id:'recomendacoes', title:'Recomendações', subtitle:'Orientações e correcções ao pesquisador.', group:'Recursos e Arquivo', kind:'table', icon:GanttChartSquare },
  { id:'responder-recomendacao', title:'Responder recomendação', subtitle:'Submeter correcções solicitadas.', group:'Recursos e Arquivo', kind:'form', icon:GanttChartSquare },
  { id:'recursos', title:'Recursos', subtitle:'Pedidos de reapreciação submetidos.', group:'Recursos e Arquivo', kind:'table', icon:Scale },
  { id:'submeter-recurso', title:'Submeter recurso', subtitle:'Registar recurso dentro do prazo.', group:'Recursos e Arquivo', kind:'form', icon:Scale },
  { id:'arquivo', title:'Arquivo', subtitle:'Processos concluídos e arquivados.', group:'Recursos e Arquivo', kind:'table', icon:FileArchive },

  { id:'utilizadores', title:'Utilizadores', subtitle:'Gestão de contas e acessos.', group:'Administração', kind:'table', icon:UserCog },
  { id:'registar-utilizador', title:'Registar utilizador', subtitle:'Criar nova conta de acesso ao sistema.', group:'Administração', kind:'form', icon:UserPlus },
  { id:'perfis', title:'Perfis', subtitle:'Perfis de acesso por função.', group:'Administração', kind:'table', icon:ShieldCheck },
  { id:'permissoes', title:'Permissões', subtitle:'Matriz de permissões do sistema.', group:'Administração', kind:'permissions', icon:ShieldCheck },
  { id:'unidades-organicas', title:'Unidades orgânicas', subtitle:'Gestão das unidades académicas.', group:'Administração', kind:'table', icon:Layers },
  { id:'areas-cientificas', title:'Áreas científicas', subtitle:'Classificação dos projectos de pesquisa.', group:'Administração', kind:'table', icon:Layers },
  { id:'paineis-especialidade', title:'Painéis de especialidade', subtitle:'Painéis e especialistas convidados.', group:'Administração', kind:'table', icon:Users },
  { id:'configuracoes', title:'Configurações', subtitle:'Parâmetros gerais do sistema.', group:'Administração', kind:'form', icon:Layers },

  { id:'notificacoes', title:'Notificações', subtitle:'Alertas e mensagens do sistema.', group:'Relatórios e Suporte', kind:'table', icon:Bell },
  { id:'relatorios', title:'Relatórios', subtitle:'Estatísticas e exportações do sistema.', group:'Relatórios e Suporte', kind:'report', icon:BarChart3 },
  { id:'auditoria', title:'Auditoria', subtitle:'Rastreabilidade e histórico de acções.', group:'Relatórios e Suporte', kind:'table', icon:FileText },
  { id:'sem-dados', title:'Sem dados', subtitle:'Estado vazio da interface.', group:'Relatórios e Suporte', kind:'empty', icon:FileText },
  { id:'carregando', title:'Carregando', subtitle:'Estado de carregamento.', group:'Relatórios e Suporte', kind:'loading', icon:FileText },
  { id:'confirmar-eliminacao', title:'Confirmar eliminação', subtitle:'Confirmação de operação crítica.', group:'Relatórios e Suporte', kind:'table', icon:FileText, modal:'delete' },
  { id:'operacao-sucesso', title:'Operação com sucesso', subtitle:'Feedback visual da acção.', group:'Relatórios e Suporte', kind:'table', icon:FileText, toast:'success' },
  { id:'operacao-erro', title:'Operação com erro', subtitle:'Feedback de erro da acção.', group:'Relatórios e Suporte', kind:'table', icon:FileText, toast:'error' },

  { id:'login', title:'Entrar', subtitle:'Aceda ao sistema com as suas credenciais.', group:'Autenticação', kind:'auth', icon:LockKeyhole },
  { id:'esqueceu-senha', title:'Recuperar senha', subtitle:'Informe o e-mail para receber o código OTP.', group:'Autenticação', kind:'auth', icon:MailCheck },
  { id:'codigo-otp', title:'Código OTP', subtitle:'Valide o código enviado para o seu e-mail.', group:'Autenticação', kind:'auth', icon:KeyRound },
  { id:'nova-senha', title:'Nova senha', subtitle:'Defina a nova palavra-passe de acesso.', group:'Autenticação', kind:'auth', icon:KeyRound },
  { id:'senha-sucesso', title:'Senha actualizada', subtitle:'A sua palavra-passe foi alterada com sucesso.', group:'Autenticação', kind:'auth', icon:KeyRound }
];
