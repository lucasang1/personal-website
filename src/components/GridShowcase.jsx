import ml1 from '../assets/ml1.png';
import ml2 from '../assets/ml2.png';
import ml3 from '../assets/ml3.png';
import ml4 from '../assets/ml4.png';
import ml5 from '../assets/ml5.png';
import spl1 from '../assets/spl1.png';
import spl2 from '../assets/spl2.png';
import spl3 from '../assets/spl3.png';
import spl4 from '../assets/spl4.png';
import spl5 from '../assets/spl5.png';
import spl6 from '../assets/spl6.png';
import lstm from '../assets/LSTM.png';
import xgboost from '../assets/XGBoost.png';
import o1 from '../assets/o1.png';
import o2 from '../assets/o2.png';
import o3 from '../assets/o3.png';
import o4 from '../assets/o4.png';
import o5 from '../assets/o5.png';

const projects = [
    {name: 'Rust WebSocket Echo Chat', href: "https://lucas-rust-ws-chat.onrender.com", badge: '?', details: 'Rust • Tokio • WebSocket • HTML • CSS • JavaScript', embed: true},
    {name: 'Credit Card Fraud Detection Model', href: "https://fraud-detection-model-lucasang.streamlit.app/", badge: 'ML', details: 'PostgreSQL • DBeaver • Scikit-Learn • Seaborn • Pandas • NumPy • Streamlit • Python', images: [ml1,ml2,ml3,ml4,ml5], alt: "Project Picture"},
    {name: 'Statistical Analysis and Performance Visualisation', href: "https://lucasang.notion.site/Finding-the-Best-Forward-in-the-SPL-2024-25-7a8b0315b45d413e8e760d18cb12bf22", badge: 'Data Viz', details: 'Plotly • Matplotlib • Pandas • NumPy • Python', images: [spl1, spl2, spl3, spl4, spl5, spl6], alt: "Project Picture"},
    {name: 'AMZN Stock Price Forecasting', badge: 'ML', details: 'XGBoost • LSTM • Scikit-Learn • TensorFlow • Keras • Statsmodels • Scikit-Learn • Seaborn • Matplotlib • Pandas • NumPy • Jupyter', images: [xgboost, lstm], alt: "Project Picture"},
    {name: 'Olist Business Optimisation', badge: 'Data Viz', details: 'MySQL • Tableau', images: [o1,o2,o3,o4,o5], alt: "Presentation"},
]

export default function GridShowcase() {
    return (
        <section className = "grid-container">
            {projects.map((p, i) => {

                return (
                <div key = {i} className = "grid-item item-full">
                    <div className = "card-caption">
                        <h3 className = "card-header">
                            <a href = {p.href} className = "no-underline hover:!underline" target="_blank">
                            {p.name}
                            </a>
                            {p.badge && (
                                <span className = "header-badge">{p.badge}</span>
                            )}
                        </h3>
                        <p className = "card-details">{p.details}</p>
                    </div>
                    {p.embed ? (
                        <iframe 
                            src = {p.href}
                            style= "width:100%; height:400px; border:none;"
                            className = "w-full h-80 border rounded-lg"
                            title = "Rust WebSocket Echo Chat"
                        />
                    ) : (
                        <div className = 'carousel'>
                            <div className = 'carousel-track'>
                                {[...p.images, ...p.images, ...p.images, ...p.images, ...p.images, ...p.images].map((src, j) => (
                                    <a href = {p.href} className="flex-none" target="_blank">
                                    <img
                                        key = {j}
                                        src = {src}
                                        alt={`${p.name} screenshot ${j % p.images.length + 1}`}
                                        className="card-image"
                                    />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                )
            })}
        </section>
    )
}

