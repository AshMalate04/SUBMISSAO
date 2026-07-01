import {
  Activity, Archive, Bell, BookOpen, CalendarDays, CheckSquare, ClipboardCheck, FileCheck,
  FileText, FolderOpen, Home, KeyRound, Layers, LayoutDashboard, LockKeyhole, MailCheck,
  MessageSquareWarning, PanelLeftClose, PanelLeftOpen, PenLine, RefreshCcw, Search,
  Settings, ShieldCheck, UserCog, Users, Workflow, AlertTriangle, CheckCircle2, XCircle, Database, ListFilter
} from 'lucide-react';

export type ScreenKind = 'dashboard'|'table'|'form'|'detail'|'modal'|'auth'|'kanban'|'empty'|'loading'|'report'|'permissions';

export type Screen = {
  id: string;
  title: string;
  subtitle: string;
  group: string;
  kind: ScreenKind;
  icon: any;
  toast?: 'success'|'error'|'warning';
  modal?: 'delete'|'submit'|'success'|'error'|'access';
  status?: string;
};

export const screens: Screen[] = [
  {id:'login', title:'Login', subtitle:'Acesso seguro ao SISAEP-UPM', group:'Autenticação', kind:'auth', icon:LockKeyhole},
  {id:'esqueceu-senha', title:'Esqueceu a senha', subtitle:'Pedido de recuperação de acesso', group:'Autenticação', kind:'auth', icon:KeyRound},
  {id:'codigo-otp', title:'Código OTP', subtitle:'Confirmação do código enviado por e-mail', group:'Autenticação', kind:'auth', icon:MailCheck},
  {id:'nova-senha', title:'Nova senha', subtitle:'Definir uma nova palavra-passe', group:'Autenticação', kind:'auth', icon:ShieldCheck},
  {id:'senha-sucesso', title:'Senha actualizada', subtitle:'Mensagem de sucesso após recuperação', group:'Autenticação', kind:'auth', icon:CheckCircle2, toast:'success'},
  {id:'dashboard-geral', title:'Painel geral', subtitle:'Indicadores principais do processo ético', group:'Painéis', kind:'dashboard', icon:LayoutDashboard, toast:'success'},
  {id:'dashboard-pesquisador', title:'Painel do pesquisador', subtitle:'Minhas submissões e pendências', group:'Painéis', kind:'dashboard', icon:Home},
  {id:'dashboard-secretariado', title:'Painel do Secretariado', subtitle:'Triagem, agenda, actas e arquivo', group:'Painéis', kind:'dashboard', icon:ClipboardCheck},
  {id:'dashboard-avaliador', title:'Painel do avaliador', subtitle:'Projectos atribuídos e pareceres pendentes', group:'Painéis', kind:'dashboard', icon:FileCheck},
  {id:'utilizadores-lista', title:'Utilizadores', subtitle:'Consulta, filtros, paginação e acções', group:'Administração', kind:'table', icon:Users},
  {id:'utilizador-registar', title:'Registar utilizador', subtitle:'Formulário de criação de conta', group:'Administração', kind:'form', icon:UserCog},
  {id:'utilizador-editar', title:'Editar utilizador', subtitle:'Alterar dados, perfil e estado', group:'Administração', kind:'form', icon:PenLine},
  {id:'utilizador-detalhe', title:'Detalhe do utilizador', subtitle:'Perfil, unidade e histórico', group:'Administração', kind:'detail', icon:UserCog},
  {id:'perfis-permissoes', title:'Perfis e permissões', subtitle:'Matriz de permissões por perfil', group:'Administração', kind:'permissions', icon:ShieldCheck},
  {id:'unidades-lista', title:'Unidades orgânicas', subtitle:'Faculdades, escolas, institutos e centros', group:'Configurações', kind:'table', icon:Layers},
  {id:'unidade-registar', title:'Registar unidade orgânica', subtitle:'Cadastro institucional', group:'Configurações', kind:'form', icon:Layers},
  {id:'areas-lista', title:'Áreas científicas', subtitle:'Consulta e gestão de áreas', group:'Configurações', kind:'table', icon:BookOpen},
  {id:'paineis-lista', title:'Painéis de especialidade', subtitle:'Painéis e membros associados', group:'Configurações', kind:'table', icon:Users},
  {id:'tipos-documento', title:'Tipos de documento', subtitle:'Documentos obrigatórios e complementares', group:'Configurações', kind:'table', icon:FileText},
  {id:'modelos-checklist', title:'Modelos de checklist', subtitle:'Itens obrigatórios para validação', group:'Configurações', kind:'table', icon:CheckSquare},
  {id:'submissoes-lista', title:'Submissões', subtitle:'Consulta de processos por protocolo e estado', group:'Submissões', kind:'table', icon:FolderOpen},
  {id:'submissao-nova', title:'Nova submissão', subtitle:'Dados do projecto e unidade orgânica', group:'Submissões', kind:'form', icon:FileText},
  {id:'submissao-anexos', title:'Anexar documentos', subtitle:'Documentos obrigatórios do projecto', group:'Submissões', kind:'form', icon:FileText},
  {id:'submissao-confirmar', title:'Confirmar submissão', subtitle:'Confirmação antes do envio oficial', group:'Submissões', kind:'modal', icon:CheckCircle2, modal:'submit'},
  {id:'submissao-detalhe', title:'Detalhe da submissão', subtitle:'Estado, documentos, histórico e prazos', group:'Submissões', kind:'detail', icon:FolderOpen},
  {id:'minhas-submissoes', title:'Minhas submissões', subtitle:'Processos submetidos pelo pesquisador', group:'Submissões', kind:'table', icon:FolderOpen},
  {id:'validar-checklist', title:'Validar checklist inicial', subtitle:'Validação documental pela unidade orgânica', group:'Tramitação', kind:'form', icon:CheckSquare},
  {id:'triagem-cep', title:'Triagem documental', subtitle:'Análise pelo Secretariado do CEP', group:'Tramitação', kind:'form', icon:ClipboardCheck},
  {id:'devolver-correcao', title:'Devolver para correcção', subtitle:'Registar pendências documentais', group:'Tramitação', kind:'modal', icon:MessageSquareWarning, modal:'submit', toast:'warning'},
  {id:'anonimizacao', title:'Anonimização', subtitle:'Preparar versão para revisão cega', group:'Tramitação', kind:'form', icon:ShieldCheck},
  {id:'distribuir-avaliadores', title:'Distribuir projecto', subtitle:'Atribuir avaliadores e painelistas', group:'Avaliação', kind:'form', icon:Workflow},
  {id:'atribuicoes-lista', title:'Atribuições de avaliação', subtitle:'Projectos atribuídos por avaliador', group:'Avaliação', kind:'table', icon:Users},
  {id:'declarar-conflito', title:'Declarar conflito de interesse', subtitle:'Confirmação obrigatória antes da avaliação', group:'Avaliação', kind:'modal', icon:AlertTriangle, modal:'submit'},
  {id:'avaliar-projecto', title:'Avaliar projecto', subtitle:'Formulário de avaliação ética', group:'Avaliação', kind:'form', icon:FileCheck},
  {id:'emitir-parecer', title:'Emitir parecer', subtitle:'Parecer do avaliador', group:'Avaliação', kind:'form', icon:FileCheck},
  {id:'parecer-especializado', title:'Parecer especializado', subtitle:'Análise técnica por painelista', group:'Avaliação', kind:'form', icon:FileCheck},
  {id:'pareceres-lista', title:'Pareceres', subtitle:'Consulta e filtros de pareceres', group:'Avaliação', kind:'table', icon:FileCheck},
  {id:'sessoes-lista', title:'Sessões do CEP', subtitle:'Agenda, estado e processos', group:'Sessões', kind:'table', icon:CalendarDays},
  {id:'sessao-criar', title:'Criar sessão', subtitle:'Sessão ordinária ou extraordinária', group:'Sessões', kind:'form', icon:CalendarDays},
  {id:'agenda-sessao', title:'Agenda da sessão', subtitle:'Processos incluídos para deliberação', group:'Sessões', kind:'kanban', icon:CalendarDays},
  {id:'presencas-sessao', title:'Lista de presenças', subtitle:'Registo dos participantes da sessão', group:'Sessões', kind:'table', icon:Users},
  {id:'registar-acta', title:'Registar acta', subtitle:'Conteúdo e ficheiro da acta', group:'Sessões', kind:'form', icon:FileText},
  {id:'deliberar-projecto', title:'Deliberar projecto', subtitle:'Decisão final do CEP', group:'Deliberação', kind:'form', icon:CheckCircle2},
  {id:'parecer-final', title:'Parecer final', subtitle:'Gerar e validar parecer oficial', group:'Deliberação', kind:'detail', icon:FileCheck},
  {id:'decisao-sucesso', title:'Decisão registada', subtitle:'Mensagem de sucesso', group:'Deliberação', kind:'modal', icon:CheckCircle2, modal:'success', toast:'success'},
  {id:'recomendacoes-lista', title:'Recomendações', subtitle:'Pendências e prazos', group:'Recomendações', kind:'table', icon:RefreshCcw},
  {id:'responder-recomendacao', title:'Responder recomendação', subtitle:'Reenvio de versão corrigida', group:'Recomendações', kind:'form', icon:RefreshCcw},
  {id:'recursos-lista', title:'Recursos', subtitle:'Pedidos de reapreciação', group:'Recursos', kind:'table', icon:MessageSquareWarning},
  {id:'submeter-recurso', title:'Submeter recurso', subtitle:'Justificativa e documentos de suporte', group:'Recursos', kind:'form', icon:MessageSquareWarning},
  {id:'reapreciar-recurso', title:'Reapreciar recurso', subtitle:'Decisão sobre o pedido', group:'Recursos', kind:'form', icon:MessageSquareWarning},
  {id:'arquivo-lista', title:'Arquivo', subtitle:'Processos encerrados e consulta autorizada', group:'Arquivo', kind:'table', icon:Archive},
  {id:'arquivo-detalhe', title:'Detalhe do arquivo', subtitle:'Documentos, pareceres e histórico', group:'Arquivo', kind:'detail', icon:Archive},
  {id:'notificacoes', title:'Notificações', subtitle:'Mensagens internas e e-mail', group:'Comunicação', kind:'table', icon:Bell},
  {id:'relatorios', title:'Relatórios', subtitle:'Indicadores, filtros e exportação', group:'Relatórios', kind:'report', icon:Activity},
  {id:'auditoria', title:'Auditoria', subtitle:'Logs de acções dos utilizadores', group:'Relatórios', kind:'table', icon:Database},
  {id:'configuracoes', title:'Configurações do sistema', subtitle:'Parâmetros, prazos e formatos', group:'Configurações', kind:'form', icon:Settings},
  {id:'confirmar-eliminar', title:'Confirmar eliminação', subtitle:'Modal de confirmação para eliminar/desactivar', group:'Estados e Mensagens', kind:'modal', icon:XCircle, modal:'delete'},
  {id:'sucesso', title:'Mensagem de sucesso', subtitle:'Toast no canto superior direito', group:'Estados e Mensagens', kind:'modal', icon:CheckCircle2, modal:'success', toast:'success'},
  {id:'erro', title:'Mensagem de erro', subtitle:'Toast de erro no canto superior direito', group:'Estados e Mensagens', kind:'modal', icon:XCircle, modal:'error', toast:'error'},
  {id:'sem-dados', title:'Sem dados', subtitle:'Estado vazio para tabelas sem resultados', group:'Estados e Mensagens', kind:'empty', icon:ListFilter},
  {id:'carregando', title:'Carregando', subtitle:'Estado de espera da interface', group:'Estados e Mensagens', kind:'loading', icon:Activity},
  {id:'acesso-negado', title:'Acesso negado', subtitle:'Utilizador sem permissão', group:'Estados e Mensagens', kind:'modal', icon:ShieldCheck, modal:'access', toast:'error'}
];
