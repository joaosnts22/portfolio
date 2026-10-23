// textos em inglês; o português fica no próprio HTML e é guardado na primeira troca
const EN = {
    'nav.sobre': 'About',
    'nav.projetos': 'Projects',
    'nav.stack': 'Stack',
    'nav.trajetoria': 'Journey',
    'nav.contato': 'Contact',
    'hero.status': 'Open to opportunities · Rio de Janeiro, Brazil',
    'hero.cargo': 'Software Developer',
    'hero.resumo': 'I build complete web applications, from internal tools used by infrastructure teams to installable apps that work offline. I like simple code, no unnecessary dependencies, and solving real problems.',
    'hero.cta1': 'See projects',
    'hero.cta2': 'Get in touch',
    'num.apps': 'applications built',
    'num.deps': 'front-end frameworks',
    'num.offline': 'of my PWAs work offline',
    'num.desde': 'coding since',
    'sobre.titulo': 'About me',
    'sobre.p1': 'I’m a Computer Science student at Unicarioca and a software developer. I started in 2022 with logic in Portugol, C and C++, and today I build complete systems: Python back-ends with FastAPI and SQLAlchemy, and front-ends in plain HTML, CSS and JavaScript.',
    'sobre.p2': 'My projects come from concrete problems. A web map of a data center so the team can find racks and equipment without walking to the room. A finance app that shows <em>when</em> money comes in and goes out, not just how much. A tuner that works without internet.',
    'sobre.p3': 'I care about the details that make software last: money stored as integer cents, optimistic concurrency control, PBKDF2 password hashing, tests on the calculation engine and interfaces that work well on mobile.',
    'val.1t': 'Real problems',
    'val.1d': 'Every project solves something I or a team actually needed.',
    'val.2t': 'Simplicity',
    'val.2d': 'No build step, no dependencies that don’t pay for themselves.',
    'val.3t': 'Reliability',
    'val.3d': 'Tests, data validation and security from day one.',
    'proj.titulo': 'Featured projects',
    'proj.sub': 'A selection of what I’ve built recently. All the code is on GitHub.',
    'link.codigo': 'Code',
    'link.demo': 'Demo',
    'link.repos': 'Repositories',
    'proj.mapa.tipo': 'Full-stack · Internal tool',
    'proj.mapa.desc': 'Web map of a data center’s technical rooms to locate rows, racks and equipment without going to the room. Anyone on the network can browse it; administrators log in to edit.',
    'proj.mapa.d1': 'Search by row, team, model, serial or asset number, with the map panning to the result',
    'proj.mapa.d2': 'Front view of each rack with equipment at its exact position (U), patch panels and documents',
    'proj.mapa.d3': 'Multi-user: screens refresh automatically and edits on stale data are rejected (409)',
    'proj.mapa.d4': 'Change history, PBKDF2-SHA256 passwords and HttpOnly cookie sessions',
    'proj.fin.tipo': 'PWA · Personal finance',
    'proj.fin.desc': 'Installable personal finance app that projects the account balance day by day, builds credit card bills from purchases, tracks limits, debts and investments, and simulates decisions before you make them. Offline, with data kept only on the device.',
    'proj.fin.d1': 'Money as integer cents and ISO dates in UTC: no floating-point or time zone bugs',
    'proj.fin.d2': 'Calculation engine separated from the UI and covered by tests',
    'proj.fin.d3': 'Side-effect-free purchase and installment simulator (structuredClone)',
    'proj.fin.d4': 'Data migration from v1, bill export to calendar (.ics) and hand-drawn SVG charts',
    'proj.afina.tipo': 'PWA · Audio',
    'proj.afina.desc': 'Free, offline tuner for 6 and 7-string acoustic and electric guitars, with 22 tunings, chromatic mode and custom tunings. Pitch detection with the YIN algorithm, right in the browser.',
    'proj.treino.tipo': 'PWA · Sports',
    'proj.treino.desc': 'Installable app with a strength training program for volleyball players, designed to be used on the phone at the gym.',
    'proj.v1.tipo': 'PWA · Personal finance',
    'proj.v1.desc': 'The first version of the finance app: monthly budget with savings goal, emergency fund and balance projection. Still online for existing users.',
    'proj.base.tipo': 'Fundamentals',
    'proj.base.titulo': 'Algorithms and logic',
    'proj.base.desc': 'Where it all started: loop and logic exercises in Portugol, C and C++, plus games made in Scratch.',
    'stack.titulo': 'Stack & skills',
    'stack.dados': 'Data & infrastructure',
    'stack.ferr': 'Tools & practices',
    'stack.testes': 'Automated testing',
    'stack.seg': 'Security (XSS, hashing)',
    'stack.conc': 'Concurrency control',
    'stack.base': 'Fundamentals',
    'stack.algo': 'Algorithms & data structures',
    'stack.oo': 'Object-oriented programming',
    'stack.idiomas': 'Languages',
    'stack.pt': 'Portuguese (native)',
    'stack.en': 'English',
    'traj.titulo': 'Journey',
    'traj.1t': 'Complete systems in production',
    'traj.1d': 'I build the Equipment Map (FastAPI + SQLite) for managing technical rooms, used on the local network by infrastructure teams, and ship v2 of Minhas Finanças, Afina and Treino LIVERJ.',
    'traj.2t': 'First web projects',
    'traj.2d': 'First version of this portfolio and studies in HTML, CSS, JavaScript, PHP and Bootstrap.',
    'traj.3t': 'Computer Science · Unicarioca',
    'traj.3d': 'Started my degree in Rio de Janeiro. Foundations in programming logic with Portugol, C and C++.',
    'contato.titulo': 'Let’s talk?',
    'contato.desc': 'I’m open to internships and developer roles, freelance work and good conversations about technology. I reply quickly by email or LinkedIn.',
    'contato.copiar': 'Copy email',
    'rodape.feito': 'Handcrafted with HTML, CSS and JavaScript.',
};

const MSG = {
    pt: { copiado: 'E-mail copiado', menu: 'Abrir menu', tema: 'Alternar tema claro/escuro' },
    en: { copiado: 'Email copied', menu: 'Open menu', tema: 'Toggle light/dark theme' },
};

const PT = {};
let idioma = 'pt';

function salvar(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) {}
}

function ler(chave) {
    try { return localStorage.getItem(chave); } catch (e) { return null; }
}

function aplicarIdioma(novo) {
    idioma = novo;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const chave = el.dataset.i18n;
        if (!(chave in PT)) PT[chave] = el.innerHTML;
        el.innerHTML = novo === 'en' && EN[chave] ? EN[chave] : PT[chave];
    });
    document.documentElement.lang = novo === 'en' ? 'en' : 'pt-BR';
    document.getElementById('btn-idioma').textContent = novo === 'en' ? 'PT' : 'EN';
    document.getElementById('btn-menu').setAttribute('aria-label', MSG[novo].menu);
    document.getElementById('btn-tema').setAttribute('aria-label', MSG[novo].tema);
    salvar('idioma', novo);
}

function temaAtual() {
    const definido = document.documentElement.getAttribute('data-theme');
    if (definido) return definido;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function mostrarToast(texto) {
    const toast = document.getElementById('toast');
    toast.textContent = texto;
    toast.classList.add('visivel');
    clearTimeout(mostrarToast.timer);
    mostrarToast.timer = setTimeout(() => toast.classList.remove('visivel'), 2000);
}

// idioma
if (ler('idioma') === 'en' || (!ler('idioma') && !navigator.language.startsWith('pt'))) {
    aplicarIdioma('en');
}
document.getElementById('btn-idioma').addEventListener('click', () => {
    aplicarIdioma(idioma === 'en' ? 'pt' : 'en');
});

// tema
document.getElementById('btn-tema').addEventListener('click', () => {
    const novo = temaAtual() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', novo);
    salvar('tema', novo);
});

// menu no celular
const nav = document.querySelector('.nav');
const btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener('click', () => {
    const aberta = nav.classList.toggle('aberta');
    btnMenu.setAttribute('aria-expanded', aberta);
});
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    nav.classList.remove('aberta');
    btnMenu.setAttribute('aria-expanded', 'false');
}));

// borda do cabeçalho ao rolar
const topo = document.querySelector('.topo');
window.addEventListener('scroll', () => topo.classList.toggle('rolou', window.scrollY > 8), { passive: true });

// copiar e-mail
document.getElementById('btn-copiar').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('joaopsantos0511@gmail.com');
        mostrarToast(MSG[idioma].copiado);
    } catch (e) {
        window.location.href = 'mailto:joaopsantos0511@gmail.com';
    }
});

// ano do rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// link ativo na navegação e animação de entrada
if ('IntersectionObserver' in window) {
    const links = new Map([...nav.querySelectorAll('a')].map((a) => [a.getAttribute('href').slice(1), a]));
    const obsSecao = new IntersectionObserver((entradas) => {
        entradas.forEach((e) => {
            if (!e.isIntersecting) return;
            links.forEach((a) => a.classList.remove('ativo'));
            const link = links.get(e.target.id);
            if (link) link.classList.add('ativo');
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach((s) => obsSecao.observe(s));

    const obsRevelar = new IntersectionObserver((entradas) => {
        entradas.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('visivel');
                obsRevelar.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.secao-cab, .projeto, .stack-bloco, .linha li, .valores li, .contato-box').forEach((el) => {
        el.classList.add('revelar');
        obsRevelar.observe(el);
    });
}
