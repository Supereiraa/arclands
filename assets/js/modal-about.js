window.addEventListener("load", () => {

  document.addEventListener("click", (e) => {
    const img = e.target.closest(".about-image");
    if (!img) return;

    let modal = document.getElementById("imageModal");

    // se não existir, cria automaticamente (garantia total)
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "imageModal";
      modal.className = "image-modal";
      modal.innerHTML = `
        <div class="image-modal-content">
          <button class="image-modal-close">✕</button>
          <img id="modalImg" />
        </div>
      `;
      document.body.appendChild(modal);
    }

    const modalImg = modal.querySelector("img");

    modalImg.src = img.src;
    modal.classList.add("active");
  });

  document.addEventListener("click", (e) => {
    const modal = document.getElementById("imageModal");

    if (!modal) return;

    if (e.target.classList.contains("image-modal-close") || e.target === modal) {
      modal.classList.remove("active");
    }
  });

});