const RECETARIO_MASTERCHEF = [
    {
        id: "receta_1",
        nombre: "Poke Bowl de Atún y Arroz Tropical 🍚🐟",
        descripcion: "Arma una base de arroz frío bien graneado. Corona el plato con el atún desmenuzado, cubitos de pepino fresco y zanahoria rallada finamente. ¡Energía pura para el día!",
        requisitos: { arroz: 0.3, atun: 1, pepino: 1, zanahoria: 1 }
    },
    {
        id: "receta_2",
        nombre: "Ensalada Primavera Premium 🥗",
        descripcion: "Trocea hojas tiernas de lechuga, ralla la zanahoria fresca y añade finas rodajas de pepino. Una opción crujiente, ligera e ideal para limpiar el paladar.",
        requisitos: { lechuga: 1, zanahoria: 1, pepino: 1 }
    },
    {
        id: "receta_3",
        nombre: "Botes de Lechuga con Atún Express 🥬",
        descripcion: "Utiliza las hojas más firmes de la lechuga como canastas. Rellénalas con el atún desmenuzado y decóralas con zanahoria rallada por encima. ¡Súper estético!",
        requisitos: { atun: 1, lechuga: 1, zanahoria: 1 }
    },
    {
        id: "receta_4",
        nombre: "Arroz Cremoso con Queso Criollo 🧀",
        descripcion: "Mezcla tu arroz caliente o frío con dados pequeños de queso criollo y tiritas de pepino. Un clásico reconfortante y rápido con lo que queda en la despensa.",
        requisitos: { arroz: 0.4, queso: 0.2, pepino: 1 }
    },
    {
        id: "receta_5",
        nombre: "Ensalada Master Proteica Completa 🍽️",
        descripcion: "Mezcla en un bowl grande arroz base, una lata de atún entera, bastones de queso criollo, lechuga picada, pepino en cubos y abundante zanahoria. El banquete definitivo.",
        requisitos: { arroz: 0.2, atun: 1, queso: 0.15, lechuga: 1, zanahoria: 1, pepino: 1 }
    }
];

let globalChefNombre = "";

document.addEventListener("DOMContentLoaded", () => {
    const formRegistro = document.getElementById("form-registro");
    const pantallaRegistro = document.getElementById("pantalla-registro");
    const contenidoPrincipal = document.getElementById("contenido-principal");
    const bienvenidaChef = document.getElementById("bienvenida-chef");

    // --- CORRECCIÓN EN EL INGRESO A LA COCINA ---
    formRegistro.addEventListener("submit", (e) => {
        // 1. FRENAMOS EN SECO LA RECARGA AUTOMÁTICA DEL NAVEGADOR
        e.preventDefault();
        
        // 2. Capturamos los elementos verificando si existen en el HTML
        const inputNombre = document.getElementById("reg-nombre");
        const inputCorreo = document.getElementById("reg-correo");
        const inputEdad = document.getElementById("reg-edad");
        const inputCiudad = document.getElementById("reg-ciudad");

        // 3. Extraemos sus valores de forma segura
        const txtNombre = inputNombre ? inputNombre.value : "";
        const txtCorreo = inputCorreo ? inputCorreo.value : "";
        const txtEdad = inputEdad ? inputEdad.value : "";
        const txtCiudad = inputCiudad ? inputCiudad.value : "";

        // 4. Validamos que ningún campo se vaya vacío
        if (txtNombre.trim() === "" || txtCorreo.trim() === "" || txtEdad.trim() === "" || txtCiudad.trim() === "") {
            alert("¡Chef! Por favor, rellena todos los campos del formulario para poder ingresar.");
            return;
        }

        // Establecemos el nombre oficial
        globalChefNombre = "Maria Valentina Toconas Chavez";

        // 5. EFECTO VISUAL DE CAMBIO DE PANTALLA (Transición sin recargar)
        pantallaRegistro.style.opacity = "0";
        
        setTimeout(() => {
            pantallaRegistro.classList.add("hidden");        // Esconde el formulario
            contenidoPrincipal.classList.remove("hidden"); // Muestra el simulador oficial
            
            // Inyectamos tus dos hermosos cuadros independientes en la cabecera
            bienvenidaChef.innerHTML = `
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.8rem; margin-top: 1.2rem;">
                    <div class="dynamic-box" style="background: var(--white); border: 3.5px solid var(--dark-neutral); border-radius: 20px; padding: 0.6rem 1.5rem; box-shadow: 0px 5px 0px var(--dark-neutral);">
                        <p style="font-size: 1.2rem; font-weight: 700; color: var(--dark-neutral); margin: 0; line-height: 1.4;">
                            👨‍🍳 Chef Aspirante: <span style="color: var(--pink-masterchef); font-family: var(--font-bubble-title); font-size: 1.4rem;">MARIA VALENTINA TOCONAS CHAVEZ</span>
                        </p>
                    </div>
                    <div class="dynamic-box" style="background: var(--white); border: 3.5px solid var(--dark-neutral); border-radius: 20px; padding: 0.6rem 1.5rem; box-shadow: 0px 5px 0px var(--dark-neutral);">
                        <p style="font-size: 1.1rem; font-weight: 700; color: #555770; margin: 0; line-height: 1.4;">
                            📍 Estación: <span style="color: var(--dark-neutral);">${txtCiudad.toUpperCase()}</span> | 🎂 Edad: <span style="color: var(--dark-neutral);">${txtEdad} años</span>
                        </p>
                    </div>
                </div>
            `;
        }, 400);
    });

    const btnCalcular = document.getElementById("btn-calcular");
    const btnLimpiar = document.getElementById("btn-limpiar");

    if (btnCalcular) btnCalcular.addEventListener("click", procesarAlimentosYRedireccionar);
    if (btnLimpiar) btnLimpiar.addEventListener("click", limpiarEstacionTrabajo);
});

// ESCENARIO 3: Procesar entradas, hacer visible el menú y redirigir la vista con Scroll
function procesarAlimentosYRedireccionar() {
    // 1. Capturamos los valores de los 6 inputs de tu HTML
    const stockAtun = parseFloat(document.getElementById("input-atun").value) || 0;
    const stockQueso = parseFloat(document.getElementById("input-queso").value) || 0;
    const stockLechuga = parseFloat(document.getElementById("input-lechuga").value) || 0;
    const stockZanahoria = parseFloat(document.getElementById("input-zanahoria").value) || 0;
    const stockPepino = parseFloat(document.getElementById("input-pepino").value) || 0;
    const stockArroz = parseFloat(document.getElementById("input-arroz").value) || 0; // El nuevo integrante

    const cuadroRecetario = document.getElementById("recetario");
    const cuadroVeredicto = document.getElementById("tarjeta-resultados");

    // Ocultamos el veredicto viejo por si acaso antes de calcular de nuevo
    if (cuadroVeredicto) cuadroVeredicto.classList.add("hidden");

    // 2. EJECUTAMOS EL FILTRADO pasándole los 6 ingredientes en el orden CORRECTO
    const exito = buscarRecetasYAsignarEventos(stockAtun, stockQueso, stockLechuga, stockZanahoria, stockPepino, stockArroz);

    // 3. Si el filtrado encontró platos, removemos la clase 'hidden' y hacemos el salto visual
    if (exito && cuadroRecetario) {
        cuadroRecetario.classList.remove("hidden");
        
        // Desplazamiento suave para que la pantalla baje sola al menú sugerido
        setTimeout(() => {
            cuadroRecetario.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
    }
}

// NUEVA FUNCIÓN RECONSTRUIDA: Filtra el catálogo e inyecta las tarjetas con sus clics correspondientes
function buscarRecetasYAsignarEventos(atun, queso, lechuga, zanahoria, pepino, arroz) {
    const contenedor = document.getElementById("contenedor-recetas");
    const miDespensa = { atun, queso, lechuga, zanahoria, pepino, arroz };

    const recetasViables = RECETARIO_MASTERCHEF.filter(receta => {
        for (let ingrediente in receta.requisitos) {
            if (miDespensa[ingrediente] < receta.requisitos[ingrediente]) {
                return false;
            }
        }
        return true;
    });

    if (recetasViables.length === 0) {
        alert("😔 Uy... No te alcanza para ninguna receta de los jueces con ese inventario. ¡Prueba agregando más unidades!");
        return false;
    }

    contenedor.innerHTML = "";

    recetasViables.forEach(receta => {
        const div = document.createElement("div");
        div.className = "receta-item";
        div.id = receta.id;
        
        let requisitosTexto = Object.entries(receta.requisitos)
            .map(([ing, cant]) => `${cant} ${ing === 'arroz' || ing === 'queso' ? 'kg' : 'u'} de ${ing}`)
            .join(', ');

        div.innerHTML = `
            <h4>${receta.nombre}</h4>
            <p>${receta.descripcion}</p>
            <span style="font-size: 0.95rem; color: #ff477e; font-weight: bold; display: block; margin-top: 0.5rem;">
                ➔ Ocupa: ${requisitosTexto}.
            </span>
        `;
        
        // ESCENARIO 4: Al presionar el plato elegido, aparece el veredicto y se desplaza hacia él
        div.addEventListener("click", () => {
            document.querySelectorAll(".receta-item").forEach(el => el.classList.remove("selected"));
            div.classList.add("selected");
            
            const cuadroVeredicto = document.getElementById("tarjeta-resultados");
            cuadroVeredicto.classList.remove("hidden"); // Desbloquea el cuadro final
            
            mostrarVeredictoFinal(receta.nombre);

            // Redirección suave al veredicto
            setTimeout(() => {
                cuadroVeredicto.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
        });

        contenedor.appendChild(div);
    });

    return true;
}

function mostrarVeredictoFinal(nombrePlato) {
    const contenedorResultados = document.getElementById("resultado-financiero");
    
    contenedorResultados.innerHTML = `
        <p style="font-size:1.4rem;"><strong>Plato Seleccionado Oficial:</strong> ${nombrePlato}</p>
        <p style="font-size:1.2rem; margin-top:0.4rem;">Chef Responsable: ${globalChefNombre.toUpperCase()}</p>
        <hr style="border: 2px dashed #2a2c3b; margin:1rem 0;">
        <div class="alert-box success">
           👩‍🍳🏆⭐ ¡VEREDICTO DEL JURADO: EXCELENTE ELECCIÓN! ⭐ Tu Platillo es Digno de Tres Estrellas ⭐ ¡Subes directo al balcón de MasterChef! ⭐ 👩‍🍳🏆
        </div>
    `;
}

function limpiarEstacionTrabajo() {
    document.getElementById("formulario-crisis").reset();
    document.getElementById("recetario").classList.add("hidden");
    document.getElementById("tarjeta-resultados").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}