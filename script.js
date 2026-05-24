document.addEventListener("DOMContentLoaded", () => {
    
    // Elementos de autenticación
    const loginScreen = document.getElementById("login-screen");
    const mainApp = document.getElementById("main-app");
    const loginForm = document.getElementById("login-form");
    const logoutBtn = document.getElementById("logout-btn");

    // Elementos de Navegación
    const navButtons = document.querySelectorAll(".nav-btn");
    const appViews = document.querySelectorAll(".app-view");
    const redirectBtn = document.querySelector(".redirection-btn");

    // Formulario de préstamos
    const loanForm = document.getElementById("loan-application-form");
    const cancelFormBtn = document.getElementById("btn-cancel-form");

    // --- LOGICA DE AUTENTICACION (SIMULADA) ---
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Simulación: Permite ingresar con cualquier credencial provista
        loginScreen.classList.add("hidden");
        mainApp.classList.remove("hidden");
    });

    logoutBtn.addEventListener("click", () => {
        mainApp.classList.add("hidden");
        loginScreen.classList.remove("hidden");
        loginForm.reset();
    });


    // --- LOGICA DE NAVEGACION ENTRE PESTAÑAS (SPA) ---
    function switchView(targetViewId) {
        // Ocultar todas las vistas
        appViews.forEach(view => view.classList.add("hidden"));
        
        // Quitar estado activo de los botones del menú
        navButtons.forEach(btn => btn.classList.remove("active"));

        // Mostrar la vista seleccionada
        const targetView = document.getElementById(targetViewId);
        if(targetView) {
            targetView.classList.remove("hidden");
        }

        // Marcar el botón correspondiente en la barra lateral
        const activeBtn = document.querySelector(`[data-target="${targetViewId}"]`);
        if(activeBtn) {
            activeBtn.classList.add("active");
        }
    }

    // Evento para los botones del menú lateral
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const target = button.getAttribute("data-target");
            if(target) switchView(target);
        });
    });

    // Evento de redirección rápida desde el botón de "Ir a requisitos" en Home
    if(redirectBtn) {
        redirectBtn.addEventListener("click", () => {
            switchView("view-requisitos");
        });
    }


    // --- MANEJO DEL FORMULARIO DE PRESTAMO ---
    loanForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Aquí recopilarías la data
        alert("¡Solicitud de Crédito Enviada con Éxito! Procesando validación corporativa.");
        loanForm.reset();
        switchView("view-home"); // Retorna al Home tras el envío exitoso
    });

    cancelFormBtn.addEventListener("click", () => {
        if(confirm("¿Estás seguro de que deseas cancelar la solicitud? Se perderán los datos introducidos.")) {
            loanForm.reset();
            switchView("view-home");
        }
    });
});