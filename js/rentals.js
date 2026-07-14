// Premium Rental Fleet Data Structure
const rentalCars = [
    {
        id: 1,
        name: "Porsche 911 GT3 RS",
        category: "Sports",
        price: 850,
        transmission: "Automatic (PDK)",
        seats: 2,
        fuel: "Premium Gas",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800"
    },
    {
        id: 2,
        name: "Mercedes-AMG G 63",
        category: "SUV",
        price: 600,
        transmission: "Automatic",
        seats: 5,
        fuel: "Twin-Turbo V8",
        image: "https://images.unsplash.com/photo-1520050206274-a1ae446cb3cc?q=80&w=800"
    },
    {
        id: 3,
        name: "Tesla Model S Plaid",
        category: "Sedan",
        price: 450,
        transmission: "Single-Speed",
        seats: 5,
        fuel: "Electric",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800"
    },
    {
        id: 4,
        name: "Rolls-Royce Ghost",
        category: "Luxury",
        price: 1500,
        transmission: "Automatic",
        seats: 4,
        fuel: "V12 Twin-Turbo",
        image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=800"
    },
    {
        id: 5,
        name: "BMW M8 Competition",
        category: "Sports",
        price: 550,
        transmission: "Automatic",
        seats: 4,
        fuel: "Gasoline",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800"
    },
    {
        id: 6,
        name: "Audi RS Q8",
        category: "SUV",
        price: 500,
        transmission: "Automatic",
        seats: 5,
        fuel: "Mild Hybrid",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=800"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("rental-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Render Function
    function displayRentals(categoryFilter = "all") {
        grid.innerHTML = "";
        
        const filteredCars = categoryFilter === "all" 
            ? rentalCars 
            : rentalCars.filter(car => car.category === categoryFilter);

        filteredCars.forEach(car => {
            const card = document.createElement("article");
            card.className = "rental-card";
            
            card.innerHTML = `
                <div style="position: relative; overflow: hidden; height: 220px;">
                    <img src="${car.image}" alt="${car.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                    <span style="position: absolute; top: 1rem; right: 1rem; background: rgba(9, 9, 9, 0.75); backdrop-filter: blur(4px); padding: 0.4rem 1rem; font-size: 0.75rem; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.1);">${car.category}</span>
                </div>
                <div style="padding: 2rem;">
                    <h3 style="font-size: 1.35rem; font-weight: 600; margin-bottom: 0.5rem; letter-spacing: -0.5px;">${car.name}</h3>
                    <div style="font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: 1.5rem;">
                        $${car.price}<span style="font-size: 0.85rem; color: #a0a0a0; font-weight: 400;"> / day</span>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1.25rem; font-size: 0.85rem; color: #cccccc;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fa-solid fa-gear" style="color: #D72638; width: 16px;"></i> <span>${car.transmission}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fa-solid fa-user" style="color: #D72638; width: 16px;"></i> <span>${car.seats} Seats</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; grid-column: span 2;">
                            <i class="fa-solid fa-gas-pump" style="color: #D72638; width: 16px;"></i> <span>${car.fuel}</span>
                        </div>
                    </div>

                    <button class="rent-now-btn" style="width: 100%; background: #D72638; color: #fff; border: none; padding: 1rem; border-radius: 4px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease;">Rent Now</button>
                </div>
            `;

            // Hover effect on image inside the vanilla wrapper
            const img = card.querySelector("img");
            card.addEventListener("mouseenter", () => img.style.transform = "scale(1.06)");
            card.addEventListener("mouseleave", () => img.style.transform = "scale(1)");

            grid.appendChild(card);
        });
    }

    // Filter Controller
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => {
                b.classList.remove("active");
                b.style.background = "rgba(255,255,255,0.03)";
                b.style.borderColor = "rgba(255,255,255,0.1)";
            });
            
            e.currentTarget.classList.add("active");
            e.currentTarget.style.background = "#D72638";
            e.currentTarget.style.borderColor = "#D72638";

            displayRentals(e.currentTarget.dataset.category);
        });
    });

    // Run on initial load
    displayRentals();
});