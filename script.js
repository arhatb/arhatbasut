.projects-header {
    margin-bottom: 40px;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
}

.project-card {
    border: 1px solid #2c2c2c;
    background: #0f0f0f;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255,255,255,0.05);
}

.project-details {
    padding: 20px;
}

.project-link {
    display: inline-block;
    margin-top: 10px;
    color: #00ffcc;
    text-decoration: none;
}

.project-link:hover {
    text-decoration: underline;
}
