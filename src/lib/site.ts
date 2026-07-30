import {
  Activity,
  Brain,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Move3D,
  ShieldCheck,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";
import {
  BodyAwarenessIcon,
  BreathIcon,
  CoreIcon,
  MobilityIcon,
  PostureIcon,
  VacuumIcon,
} from "@/components/hmp-icons";

export const links = {
  amazon: "https://a.co/d/0g8VYXJZ",
  whatsapp:
    "https://wa.me/5521973202192?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20HMP.",
  course: "https://payfast.greenn.com.br/ht97kwc",
  leadList: "https://payfast.greenn.com.br/ht97kwc",
};

export const painPoints = [
  "dor lombar recorrente",
  "má postura no trabalho e nos treinos",
  "rigidez articular e sensação de corpo travado",
  "respiração curta, alta e superficial",
  "perda de controle abdominal e do core",
  "diástase e baixa percepção da parede abdominal",
  "tensão corporal acumulada",
  "falta de mobilidade para movimentos simples",
];

export const methodSteps = [
  {
    title: "Inspiração nasal",
    text: "Entrada de ar controlada, preparando caixa torácica, diafragma e postura para a execução.",
  },
  {
    title: "Expiração pela boca",
    text: "Saída de ar conduzida para organizar o ritmo respiratório e criar base para a apneia.",
  },
  {
    title: "Apneia expiratória",
    text: "Pausa após a expiração, feita com técnica, progressão e respeito ao nível de cada pessoa.",
  },
  {
    title: "Sucção abdominal",
    text: "Vácuo abdominal associado ao crescimento axial, sem transformar a prática em força bruta.",
  },
  {
    title: "Ativação postural",
    text: "Posturas ativas para alinhar corpo, ampliar consciência e integrar o core ao movimento.",
  },
  {
    title: "Mobilidade integrada",
    text: "Movimentos articulares e posições progressivas para levar o método para a vida e para o treino.",
  },
];

export const benefits = [
  { icon: CheckCircle2, title: "Postura mais organizada" },
  { icon: Move3D, title: "Mais mobilidade articular" },
  { icon: Wind, title: "Respiração mais consciente" },
  { icon: ShieldCheck, title: "Menor tensão lombar" },
  { icon: Brain, title: "Consciência corporal refinada" },
  { icon: Activity, title: "Controle do core" },
  { icon: Sparkles, title: "Melhora estética abdominal" },
  { icon: HeartPulse, title: "Suporte para treino e reabilitação" },
];

export const audiences = [
  "praticantes iniciantes",
  "pessoas com má postura",
  "pessoas com dor lombar",
  "mulheres no pós-parto",
  "atletas",
  "profissionais de Educação Física",
  "fisioterapeutas",
  "pessoas que buscam melhorar respiração e mobilidade",
];

export const courseCards = [
  {
    id: "curso-online",
    eyebrow: "Curso Online HMP",
    title: "Treinamento completo com aulas práticas e progressões",
    text: "Uma jornada estruturada para aprender a lógica do método, executar com segurança e evoluir de exercícios básicos para combinações mais completas de respiração, posturas e mobilidade.",
    icon: GraduationCap,
    cta: "Entrar na lista do curso",
    href: links.leadList,
  },
  {
    id: "curso-presencial",
    eyebrow: "Curso Presencial HMP",
    title: "Experiência premium para vivenciar o método na prática",
    text: "Imersão indicada para profissionais e alunos que desejam correção técnica, leitura corporal, prática guiada e aplicação real do HMP em contextos de treino, saúde e performance.",
    icon: Users,
    cta: "Falar pelo WhatsApp",
    href: links.whatsapp,
  },
];

export const testimonials = [
  {
    quote:
      "Eu buscava uma prática mais organizada para respirar melhor, melhorar minha postura e entender o papel do abdômen sem forçar o corpo.",
    author: "Aluno iniciante",
    role: "Relato representativo",
  },
  {
    quote:
      "O HMP trouxe uma lógica clara para integrar respiração, mobilidade e postura nas aulas, com progressões que fazem sentido para diferentes níveis.",
    author: "Profissional do movimento",
    role: "Relato representativo",
  },
  {
    quote:
      "A prática me ajudou a prestar atenção em detalhes que eu ignorava: alinhamento, controle do core, ritmo respiratório e consciência corporal.",
    author: "Praticante HMP",
    role: "Relato representativo",
  },
];

export const faqs = [
  {
    question: "O HMP é só hipopressivo?",
    answer:
      "Não. O HMP usa a respiração hipopressiva como uma base importante, mas integra mobilidade articular, posturas ativas, alinhamento corporal, controle do core e consciência corporal.",
  },
  {
    question: "Iniciante consegue fazer?",
    answer:
      "Sim. A proposta é trabalhar com progressões. O iniciante começa pelos fundamentos respiratórios e posturais antes de avançar para exercícios mais complexos.",
  },
  {
    question: "Preciso ter experiência?",
    answer:
      "Não. Experiência prévia ajuda, mas não é obrigatória. O método foi pensado para ser explicado com linguagem acessível e prática orientada.",
  },
  {
    question: "Serve para dor lombar?",
    answer:
      "Pode ser um recurso complementar para melhorar postura, controle corporal, mobilidade e percepção do core. Em casos de dor persistente, é importante avaliação profissional individualizada.",
  },
  {
    question: "Serve para diástase?",
    answer:
      "Pode auxiliar no trabalho de consciência e controle abdominal, especialmente quando aplicado com progressão adequada. Mulheres no pós-parto devem respeitar avaliação e liberação profissional.",
  },
  {
    question: "O curso tem certificado?",
    answer:
      "As informações sobre certificado devem ser conferidas na página oficial do curso ou pelo WhatsApp antes da inscrição.",
  },
  {
    question: "Como acesso o livro?",
    answer:
      "O acesso ao livro é feito pelo botão de compra, que direciona para a página oficial na Amazon.",
  },
  {
    question: "Como acesso o curso?",
    answer:
      "O curso online pode ser acessado pela página de venda oficial. Em caso de dúvida, o WhatsApp é o canal direto de atendimento.",
  },
];

export const stats = [
  { value: "01", label: "método autoral" },
  { value: "03", label: "pilares integrados" },
  { value: "360", label: "visão corpo-respiração" },
];

export const heroHighlights = [
  { icon: BreathIcon, label: "Respiração" },
  { icon: MobilityIcon, label: "Mobilidade" },
  { icon: PostureIcon, label: "Postura" },
  { icon: CoreIcon, label: "Core" },
  { icon: VacuumIcon, label: "Vacuum" },
  { icon: BodyAwarenessIcon, label: "Consciência corporal" },
];

export const mediaPlaceholders = [
  {
    type: "video" as const,
    title: "Registro em vídeo com Vivi Winkler praticando a técnica",
    label: "Influencer",
    ratio: "wide" as const,
    src: "/provas-hmp/vivi-winkler-repost.mp4",
    alt: "Vídeo repost com Vivi Winkler praticando técnica do método",
    position: "center",
  },
  {
    type: "photo" as const,
    title: "Turma de workshop presencial do Método HMP",
    label: "Curso presencial",
    ratio: "portrait" as const,
    src: "/provas-hmp/workshop-hmp-turma-01.jpg",
    alt: "Turma em workshop presencial do Método HMP",
    position: "center",
  },
  {
    type: "photo" as const,
    title: "Workshop internacional de hipopressivos, mobilidade e postural",
    label: "Cursos",
    ratio: "portrait" as const,
    src: "/provas-hmp/workshop-santiago-card-01.jpeg",
    alt: "Arte de workshop internacional de hipopressivos, mobilidade e postural",
    position: "center",
  },
];

export const realResults = [
  {
    type: "video" as const,
    title: "Vivi Winkler praticando a técnica",
    label: "Influencer",
    src: "/provas-hmp/vivi-winkler-repost.mp4",
    alt: "Vídeo repost com Vivi Winkler praticando técnica do método",
    ratio: "portrait" as const,
    position: "center",
    text: "Registro em vídeo de prática da técnica, usado como prova de alcance e autoridade do método.",
  },
  {
    type: "beforeAfter" as const,
    title: "Comparativo de costas",
    label: "Antes e depois",
    src: "/provas-hmp/antes-depois-costas-01.png",
    alt: "Antes e depois de costas com registro visual",
    ratio: "portrait" as const,
    position: "center 28%",
    text: "Registro visual de postura, medidas e evolução corporal com acompanhamento.",
  },
  {
    type: "beforeAfter" as const,
    title: "Comparativo frontal",
    label: "Antes e depois",
    src: "/provas-hmp/antes-depois-frente-01.jpg",
    alt: "Antes e depois frontal com atualização semanal",
    ratio: "portrait" as const,
    position: "center 24%",
    text: "Evidência visual com contexto de datas, medidas e relato do praticante.",
  },
  {
    type: "whatsapp" as const,
    title: "Medidas registradas",
    label: "Print",
    src: "/provas-hmp/whatsapp-medidas-02.jpg",
    alt: "Print de WhatsApp com medidas antes e depois",
    ratio: "portrait" as const,
    position: "center 32%",
    text: "Print de acompanhamento com redução de medidas e reação do grupo.",
  },
  {
    type: "measure" as const,
    title: "Medidas e evolução",
    label: "Medidas",
    src: "/provas-hmp/whatsapp-medidas-05.jpg",
    alt: "Print de WhatsApp com evolução de medidas",
    ratio: "square" as const,
    position: "center 28%",
    text: "Registro de medidas compartilhadas durante o acompanhamento da prática.",
  },
  {
    type: "beforeAfter" as const,
    title: "Evolução abdominal",
    label: "Comparativo",
    src: "/provas-hmp/antes-depois-abdomen-01.jpg",
    alt: "Antes e depois abdominal com medidas registradas",
    ratio: "portrait" as const,
    position: "center 36%",
    text: "Comparativo visual com legenda responsável e sem promessas absolutas.",
  },
  {
    type: "beforeAfter" as const,
    title: "Evolução em poucos dias",
    label: "Comparativo",
    src: "/provas-hmp/antes-depois-abdomen-02.jpg",
    alt: "Comparativo abdominal com datas registradas",
    ratio: "square" as const,
    position: "center",
    text: "Registro de evolução com datas visíveis e acompanhamento do processo.",
  },
  {
    type: "whatsapp" as const,
    title: "Acompanhamento por medidas",
    label: "WhatsApp",
    src: "/provas-hmp/whatsapp-medidas-03.jpg",
    alt: "Print de WhatsApp com acompanhamento por medidas",
    ratio: "portrait" as const,
    position: "center 30%",
    text: "Print real de acompanhamento com medidas e comunicação de evolução.",
  },
  {
    type: "whatsapp" as const,
    title: "Registro semanal",
    label: "WhatsApp",
    src: "/provas-hmp/whatsapp-medidas-04.jpg",
    alt: "Print de WhatsApp com registro semanal de medidas",
    ratio: "portrait" as const,
    position: "center 28%",
    text: "Relato com medidas organizadas por data para leitura de progresso.",
  },
  {
    type: "beforeAfter" as const,
    title: "Postura e linha corporal",
    label: "Antes e depois",
    src: "/provas-hmp/antes-depois-postura-01.jpg",
    alt: "Antes e depois com fotos de postura e medidas",
    ratio: "portrait" as const,
    position: "center 24%",
    text: "Comparativo visual para mostrar postura, linha corporal e consistência.",
  },
];

export const courseProofs = [
  {
    type: "photo" as const,
    title: "Turma presencial HMP",
    label: "Workshop",
    ratio: "wide" as const,
    src: "/provas-hmp/workshop-hmp-turma-01.jpg",
    alt: "Turma presencial do Método HMP",
    position: "center",
    text: "Registro de curso presencial com alunos e profissionais vivenciando o método.",
  },
  {
    type: "photo" as const,
    title: "Workshop internacional",
    label: "Curso",
    ratio: "square" as const,
    src: "/provas-hmp/workshop-santiago-card-01.jpeg",
    alt: "Arte de workshop em Santiago, República Dominicana",
    position: "center",
    text: "Material de divulgação de workshop internacional de hipopressivos, mobilidade e postural.",
  },
];
