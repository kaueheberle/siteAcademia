// Função para mostrar modal de localização
function showLocation() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 15px;
        overflow-y: auto;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #111111, #000000);
            padding: 30px 20px;
            border-radius: 20px;
            max-width: 600px;
            width: 100%;
            text-align: center;
            border: 2px solid #00ff00;
            box-shadow: 0 20px 40px rgba(0, 255, 0, 0.3);
            margin: auto;
            max-height: 90vh;
            overflow-y: auto;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: #00ff00; margin: 0; font-size: 1.5rem;">📍 Nossa Localização</h2>
                <button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = 'auto';" style="
                    background: transparent;
                    color: #00ff00;
                    border: 2px solid #00ff00;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    font-size: 1.2rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">✕</button>
            </div>
            <div style="background: #333; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                <p style="color: #fff; font-size: 1.1rem; margin-bottom: 15px;">🏢 Endereço:</p>
                <p style="color: #00ff00; font-size: 1rem; margin-bottom: 15px;">Rua José Valério de Souza, 32 - Barra do Aririu<br>Palhoça - SC, 88134-500</p>
                <p style="color: #fff; margin-bottom: 10px;">🕐 Horário de Funcionamento:</p>
                <p style="color: #00ff00; font-size: 0.9rem;">Segunda a Sexta: 5:30h às 23h<br>Sábado: 09h às 15h<br>Domingo: Fechado</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; margin-bottom: 20px;">
                <div style="background: #222; padding: 15px; border-radius: 10px; border: 1px solid #00ff00;">
                    <p style="color: #00ff00; font-size: 1.8rem; margin-bottom: 8px;">🏋️‍♂️</p>
                    <p style="color: #fff; font-size: 0.8rem;">Área de Musculação</p>
                </div>
                <div style="background: #222; padding: 15px; border-radius: 10px; border: 1px solid #00ff00;">
                    <p style="color: #00ff00; font-size: 1.8rem; margin-bottom: 8px;">🏃‍♂️</p>
                    <p style="color: #fff; font-size: 0.8rem;">Área Cardio</p>
                </div>
                <div style="background: #222; padding: 15px; border-radius: 10px; border: 1px solid #00ff00;">
                    <p style="color: #00ff00; font-size: 1.8rem; margin-bottom: 8px;">🥊</p>
                    <p style="color: #fff; font-size: 0.8rem;">Área de Funcional</p>
                </div>
            </div>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <a href="https://www.google.com/maps/place/Top10+Academia/@-27.6740355,-48.6440719,17z/data=!3m1!4b1!4m6!3m5!1s0x952735092c33e8a1:0x3a57f2ac284594bc!8m2!3d-27.6740355!4d-48.6440719!16s%2Fg%2F11xkxbkysx?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="
                    background: linear-gradient(45deg, #00ff00, #00cc00);
                    color: #000;
                    padding: 12px 20px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                ">🗺️ Ver no Google Maps</a>
                <button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = 'auto';" style="
                    background: transparent;
                    color: #00ff00;
                    border: 2px solid #00ff00;
                    padding: 12px 20px;
                    border-radius: 25px;
                    font-weight: bold;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                ">❌ Fechar</button>
            </div>
        </div>
    `;
    
    modal.classList.add('modal-overlay');
    document.body.appendChild(modal);
    
    // Previne scroll do body
    document.body.style.overflow = 'hidden';
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            document.body.style.overflow = 'auto';
            modal.remove();
        }
    };
}

// Função para mostrar modal de download do app
function downloadApp() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 15px;
        overflow-y: auto;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #111111, #000000);
            padding: 30px 20px;
            border-radius: 20px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            border: 2px solid #00ff00;
            box-shadow: 0 20px 40px rgba(0, 255, 0, 0.3);
            margin: auto;
            max-height: 90vh;
            overflow-y: auto;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: #00ff00; margin: 0; font-size: 1.5rem;">📱 Baixe Nosso App</h2>
                <button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = 'auto';" style="
                    background: transparent;
                    color: #00ff00;
                    border: 2px solid #00ff00;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    font-size: 1.2rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">✕</button>
            </div>
            <div style="background: #333; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                <p style="color: #fff; font-size: 1.1rem; margin-bottom: 15px;">🎯 Com o App Top10 você pode:</p>
                <ul style="color: #00ff00; text-align: left; margin-bottom: 15px; padding-left: 20px; font-size: 0.9rem;">
                    <li style="margin-bottom: 8px;">✅ Acompanhar seus treinos</li>
                    <li style="margin-bottom: 8px;">✅ Ver evolução</li>
                    <li style="margin-bottom: 8px;">✅ Receber dicas personalizadas</li>
                </ul>
            </div>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 15px;">
                <a href="https://play.google.com/store/apps/details?id=com.nexur.trainer" target="_blank" style="
                    background: linear-gradient(45deg, #00ff00, #00cc00);
                    color: #000;
                    padding: 12px 20px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                ">
                    <span style="font-size: 1.1rem;">🤖</span>
                    Android
                </a>
                <a href="https://apps.apple.com/br/app/nexur-trainer/id1167082332" target="_blank" style="
                    background: linear-gradient(45deg, #00ff00, #00cc00);
                    color: #000;
                    padding: 12px 20px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                ">
                    <span style="font-size: 1.1rem;">🍎</span>
                    IOS
                </a>
            </div>
            <button onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow = 'auto';" style="
                background: transparent;
                color: #00ff00;
                border: 2px solid #00ff00;
                padding: 12px 20px;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9rem;
            ">❌ Fechar</button>
        </div>
    `;
    
    modal.classList.add('modal-overlay');
    document.body.appendChild(modal);
    
    // Previne scroll do body
    document.body.style.overflow = 'hidden';
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            document.body.style.overflow = 'auto';
            modal.remove();
        }
    };
}

// Animação suave para os botões
document.addEventListener('DOMContentLoaded', function() {
    // Efeitos de hover nos botões
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito de scroll suave para animações
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animação aos elementos das features
    document.querySelectorAll('.feature').forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.6s ease';
        observer.observe(feature);
    });
});