// Application data
const APP_DATA = {"hitech_center": {"lat": 17.4455, "lng": 78.3826}, "hexagonal_grid": [{"id": "hex_-4_-4", "center": {"lat": 17.430055984555985, "lng": 78.36390695467044}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 4, "drivers": 3}, {"id": "hex_-4_-3", "center": {"lat": 17.430055984555985, "lng": 78.36858021600283}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 0, "drivers": 1}, {"id": "hex_-4_-2", "center": {"lat": 17.430055984555985, "lng": 78.37325347733521}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 3, "drivers": 2}, {"id": "hex_-4_-1", "center": {"lat": 17.430055984555985, "lng": 78.3779267386676}, "demand_level": "Medium", "surge_multiplier": 1.1, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 2}, {"id": "hex_-4_0", "center": {"lat": 17.430055984555985, "lng": 78.3826}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 4}, {"id": "hex_-4_1", "center": {"lat": 17.430055984555985, "lng": 78.38727326133239}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 4}, {"id": "hex_-4_2", "center": {"lat": 17.430055984555985, "lng": 78.39194652266477}, "demand_level": "Medium", "surge_multiplier": 1.2, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 0, "drivers": 4}, {"id": "hex_-4_3", "center": {"lat": 17.430055984555985, "lng": 78.39661978399716}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 3}, {"id": "hex_-3_-4", "center": {"lat": 17.434466388701847, "lng": 78.36624358533662}, "demand_level": "Medium", "surge_multiplier": 1.3, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 1}, {"id": "hex_-3_-3", "center": {"lat": 17.434466388701847, "lng": 78.370916846669}, "demand_level": "Medium", "surge_multiplier": 1.4, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 6, "drivers": 3}, {"id": "hex_-3_-2", "center": {"lat": 17.434466388701847, "lng": 78.37559010800139}, "demand_level": "Medium", "surge_multiplier": 1.4, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 4}, {"id": "hex_-3_-1", "center": {"lat": 17.434466388701847, "lng": 78.38026336933378}, "demand_level": "Medium", "surge_multiplier": 1.2, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 4, "drivers": 1}, {"id": "hex_-3_0", "center": {"lat": 17.434466388701847, "lng": 78.38493663066616}, "demand_level": "High", "surge_multiplier": 1.8, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 3, "drivers": 1}, {"id": "hex_-3_1", "center": {"lat": 17.434466388701847, "lng": 78.38960989199855}, "demand_level": "Medium", "surge_multiplier": 1.4, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 2}, {"id": "hex_-3_2", "center": {"lat": 17.434466388701847, "lng": 78.39428315333093}, "demand_level": "High", "surge_multiplier": 2.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 6, "drivers": 2}, {"id": "hex_-3_3", "center": {"lat": 17.434466388701847, "lng": 78.39895641466332}, "demand_level": "Medium", "surge_multiplier": 1.3, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 4}, {"id": "hex_-2_-4", "center": {"lat": 17.43887679284771, "lng": 78.36390695467044}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 6, "drivers": 3}, {"id": "hex_-2_-3", "center": {"lat": 17.43887679284771, "lng": 78.36858021600283}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 1}, {"id": "hex_-2_-2", "center": {"lat": 17.43887679284771, "lng": 78.37325347733521}, "demand_level": "Medium", "surge_multiplier": 1.3, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 6, "drivers": 3}, {"id": "hex_-2_-1", "center": {"lat": 17.43887679284771, "lng": 78.3779267386676}, "demand_level": "High", "surge_multiplier": 1.7, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 3, "drivers": 3}, {"id": "hex_-2_0", "center": {"lat": 17.43887679284771, "lng": 78.3826}, "demand_level": "High", "surge_multiplier": 2.2, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 1}, {"id": "hex_-2_1", "center": {"lat": 17.43887679284771, "lng": 78.38727326133239}, "demand_level": "High", "surge_multiplier": 1.9, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 2, "drivers": 1}, {"id": "hex_-2_2", "center": {"lat": 17.43887679284771, "lng": 78.39194652266477}, "demand_level": "Medium", "surge_multiplier": 1.1, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 0, "drivers": 2}, {"id": "hex_-2_3", "center": {"lat": 17.43887679284771, "lng": 78.39661978399716}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 2, "drivers": 1}, {"id": "hex_-1_-4", "center": {"lat": 17.443287196993572, "lng": 78.36624358533662}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 0, "drivers": 3}, {"id": "hex_-1_-3", "center": {"lat": 17.443287196993572, "lng": 78.370916846669}, "demand_level": "Medium", "surge_multiplier": 1.1, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 6, "drivers": 2}, {"id": "hex_-1_-2", "center": {"lat": 17.443287196993572, "lng": 78.37559010800139}, "demand_level": "High", "surge_multiplier": 1.6, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 4, "drivers": 1}, {"id": "hex_-1_-1", "center": {"lat": 17.443287196993572, "lng": 78.38026336933378}, "demand_level": "High", "surge_multiplier": 2.3, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 2}, {"id": "hex_-1_0", "center": {"lat": 17.443287196993572, "lng": 78.38493663066616}, "demand_level": "High", "surge_multiplier": 2.4, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 1}, {"id": "hex_-1_1", "center": {"lat": 17.443287196993572, "lng": 78.38960989199855}, "demand_level": "High", "surge_multiplier": 1.5, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 1}, {"id": "hex_-1_2", "center": {"lat": 17.443287196993572, "lng": 78.39428315333093}, "demand_level": "Medium", "surge_multiplier": 1.3, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 3, "drivers": 2}, {"id": "hex_-1_3", "center": {"lat": 17.443287196993572, "lng": 78.39895641466332}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 3, "drivers": 2}, {"id": "hex_0_-4", "center": {"lat": 17.447697601139434, "lng": 78.36390695467044}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 1}, {"id": "hex_0_-3", "center": {"lat": 17.447697601139434, "lng": 78.36858021600283}, "demand_level": "Medium", "surge_multiplier": 1.2, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 4}, {"id": "hex_0_-2", "center": {"lat": 17.447697601139434, "lng": 78.37325347733521}, "demand_level": "High", "surge_multiplier": 1.8, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 1}, {"id": "hex_0_-1", "center": {"lat": 17.447697601139434, "lng": 78.3779267386676}, "demand_level": "High", "surge_multiplier": 2.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 2, "drivers": 2}, {"id": "hex_0_0", "center": {"lat": 17.447697601139434, "lng": 78.3826}, "demand_level": "High", "surge_multiplier": 1.9, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 0, "drivers": 4}, {"id": "hex_0_1", "center": {"lat": 17.447697601139434, "lng": 78.38727326133239}, "demand_level": "High", "surge_multiplier": 2.2, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 3}, {"id": "hex_0_2", "center": {"lat": 17.447697601139434, "lng": 78.39194652266477}, "demand_level": "Medium", "surge_multiplier": 1.4, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 1}, {"id": "hex_0_3", "center": {"lat": 17.447697601139434, "lng": 78.39661978399716}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 1}, {"id": "hex_1_-4", "center": {"lat": 17.452108005285296, "lng": 78.36624358533662}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 3}, {"id": "hex_1_-3", "center": {"lat": 17.452108005285296, "lng": 78.370916846669}, "demand_level": "Medium", "surge_multiplier": 1.1, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 2}, {"id": "hex_1_-2", "center": {"lat": 17.452108005285296, "lng": 78.37559010800139}, "demand_level": "High", "surge_multiplier": 1.7, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 0, "drivers": 3}, {"id": "hex_1_-1", "center": {"lat": 17.452108005285296, "lng": 78.38026336933378}, "demand_level": "High", "surge_multiplier": 1.9, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 2, "drivers": 1}, {"id": "hex_1_0", "center": {"lat": 17.452108005285296, "lng": 78.38493663066616}, "demand_level": "High", "surge_multiplier": 2.1, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 6, "drivers": 2}, {"id": "hex_1_1", "center": {"lat": 17.452108005285296, "lng": 78.38960989199855}, "demand_level": "Medium", "surge_multiplier": 1.4, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 4}, {"id": "hex_1_2", "center": {"lat": 17.452108005285296, "lng": 78.39428315333093}, "demand_level": "Medium", "surge_multiplier": 1.2, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 1}, {"id": "hex_1_3", "center": {"lat": 17.452108005285296, "lng": 78.39895641466332}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 4}, {"id": "hex_2_-4", "center": {"lat": 17.45651840943116, "lng": 78.36390695467044}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 1}, {"id": "hex_2_-3", "center": {"lat": 17.45651840943116, "lng": 78.36858021600283}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 2}, {"id": "hex_2_-2", "center": {"lat": 17.45651840943116, "lng": 78.37325347733521}, "demand_level": "Medium", "surge_multiplier": 1.2, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 4, "drivers": 4}, {"id": "hex_2_-1", "center": {"lat": 17.45651840943116, "lng": 78.3779267386676}, "demand_level": "Medium", "surge_multiplier": 1.3, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 6, "drivers": 4}, {"id": "hex_2_0", "center": {"lat": 17.45651840943116, "lng": 78.3826}, "demand_level": "High", "surge_multiplier": 1.6, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 2, "drivers": 2}, {"id": "hex_2_1", "center": {"lat": 17.45651840943116, "lng": 78.38727326133239}, "demand_level": "Medium", "surge_multiplier": 1.4, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 2}, {"id": "hex_2_2", "center": {"lat": 17.45651840943116, "lng": 78.39194652266477}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 3, "drivers": 4}, {"id": "hex_2_3", "center": {"lat": 17.45651840943116, "lng": 78.39661978399716}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 5, "drivers": 4}, {"id": "hex_3_-4", "center": {"lat": 17.46092881357702, "lng": 78.36624358533662}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 6, "drivers": 2}, {"id": "hex_3_-3", "center": {"lat": 17.46092881357702, "lng": 78.370916846669}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 1, "drivers": 1}, {"id": "hex_3_-2", "center": {"lat": 17.46092881357702, "lng": 78.37559010800139}, "demand_level": "Medium", "surge_multiplier": 1.4, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 4, "drivers": 3}, {"id": "hex_3_-1", "center": {"lat": 17.46092881357702, "lng": 78.38026336933378}, "demand_level": "Medium", "surge_multiplier": 1.1, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 7, "drivers": 4}, {"id": "hex_3_0", "center": {"lat": 17.46092881357702, "lng": 78.38493663066616}, "demand_level": "Medium", "surge_multiplier": 1.2, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 3, "drivers": 3}, {"id": "hex_3_1", "center": {"lat": 17.46092881357702, "lng": 78.38960989199855}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 0, "drivers": 1}, {"id": "hex_3_2", "center": {"lat": 17.46092881357702, "lng": 78.39428315333093}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 4, "drivers": 2}, {"id": "hex_3_3", "center": {"lat": 17.46092881357702, "lng": 78.39895641466332}, "demand_level": "Low", "surge_multiplier": 1.0, "radius_lng": 0.0026981086882485713, "radius_lat": 0.002574002574002574, "riders": 0, "drivers": 3}], "pricing_data": {"base_fare": 150, "distance_rate": 12, "time_rate": 2, "booking_fee": 25, "destination": {"lat": 17.42, "lng": 78.4}}, "config": {"grid_size": 7, "radius_km": 2, "color_scheme": {"background": "#000000", "text": "#FFFFFF", "electric_blue": "#00BFFF", "surge_orange": "#FF8C00", "low_demand": "#00BFFF", "medium_demand": "#FFFF00", "high_demand": "#FF8C00"}}};

// Application state
let currentUserLocation = 'hex_0_0'; // Start at center
let isDragging = false;
let lowBatteryMode = false;
let canvas, ctx;
let hexPositions = new Map();

// Constants
const COLORS = {
    background: '#000000',
    text: '#FFFFFF',
    electricBlue: '#00BFFF',
    surgeOrange: '#FF8C00',
    lowDemand: 'rgba(0, 191, 255, 0.2)',
    mediumDemand: 'rgba(255, 255, 0, 0.2)',
    highDemand: 'rgba(255, 140, 0, 0.2)',
    userMarker: '#FF0000'
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('hexGrid');
    ctx = canvas.getContext('2d');
    
    initializeCanvas();
    setupEventListeners();
    drawGrid();
    updateLocationInfo();
    updatePricing();
});

function initializeCanvas() {
    // Set up canvas with proper scaling
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = 600 * scale;
    canvas.height = 500 * scale;
    canvas.style.width = '600px';
    canvas.style.height = '500px';
    ctx.scale(scale, scale);
    
    // Calculate hexagon positions for drawing
    calculateHexPositions();
}

function calculateHexPositions() {
    const centerX = 300; // Half of canvas width
    const centerY = 250; // Half of canvas height
    const hexSize = 30;
    const hexWidth = hexSize * 1.5;
    const hexHeight = Math.sqrt(3) * hexSize;
    
    APP_DATA.hexagonal_grid.forEach(hex => {
        // Extract grid coordinates from ID (e.g., "hex_-2_1" -> x=-2, y=1)
        const coords = hex.id.split('_');
        const gridX = parseInt(coords[1]);
        const gridY = parseInt(coords[2]);
        
        // Calculate screen position using proper hexagonal grid math
        const x = centerX + (gridX * hexWidth);
        const y = centerY + (gridY * hexHeight) + (gridX % 2 !== 0 ? hexHeight/2 : 0);
        
        hexPositions.set(hex.id, {
            x: x,
            y: y,
            size: hexSize,
            hex: hex
        });
    });
}

function drawGrid() {
    // Clear canvas with black background
    ctx.fillStyle = COLORS.background;
    ctx.fillRect(0, 0, 600, 500);
    
    // Draw all hexagons first
    hexPositions.forEach((pos, hexId) => {
        drawHexagon(pos);
    });
    
    // Draw user marker on top
    drawUserMarker();
}

function drawHexagon(pos) {
    const hex = pos.hex;
    const x = pos.x;
    const y = pos.y;
    const size = pos.size;
    
    // Determine colors based on demand level
    let fillColor, strokeColor;
    switch(hex.demand_level) {
        case 'Low':
            fillColor = COLORS.lowDemand;
            strokeColor = COLORS.electricBlue;
            break;
        case 'Medium':
            fillColor = COLORS.mediumDemand;
            strokeColor = '#FFFF00';
            break;
        case 'High':
            fillColor = COLORS.highDemand;
            strokeColor = COLORS.surgeOrange;
            break;
        default:
            fillColor = COLORS.lowDemand;
            strokeColor = COLORS.electricBlue;
    }
    
    // Highlight current user location
    if (hex.id === currentUserLocation) {
        strokeColor = '#FF0000';
        ctx.lineWidth = 3;
    } else {
        ctx.lineWidth = 1;
    }
    
    // Draw hexagon shape
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) {
            ctx.moveTo(hx, hy);
        } else {
            ctx.lineTo(hx, hy);
        }
    }
    ctx.closePath();
    
    // Fill and stroke
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    
    // Draw text info
    ctx.fillStyle = COLORS.text;
    ctx.font = '9px Fira Code, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(hex.demand_level, x, y - 8);
    ctx.fillText(`${hex.surge_multiplier.toFixed(1)}x`, x, y + 3);
    
    // Draw riders (blue dots)
    drawRiders(x, y, hex.riders, size - 8);
    
    // Draw drivers (white squares)
    drawDrivers(x, y, hex.drivers, size - 8);
}

function drawRiders(centerX, centerY, count, maxRadius) {
    if (count === 0) return;
    
    const radius = 1.5;
    ctx.fillStyle = COLORS.electricBlue;
    
    for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count;
        const distance = Math.random() * maxRadius * 0.6;
        const x = centerX + distance * Math.cos(angle);
        const y = centerY + distance * Math.sin(angle) + 12;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function drawDrivers(centerX, centerY, count, maxRadius) {
    if (count === 0) return;
    
    const size = 2;
    ctx.fillStyle = COLORS.text;
    
    for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count + Math.PI/4;
        const distance = Math.random() * maxRadius * 0.6;
        const x = centerX + distance * Math.cos(angle);
        const y = centerY + distance * Math.sin(angle) + 12;
        
        ctx.fillRect(x - size/2, y - size/2, size, size);
    }
}

function drawUserMarker() {
    const pos = hexPositions.get(currentUserLocation);
    if (pos) {
        // Draw outer ring
        ctx.strokeStyle = COLORS.text;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 10, 0, 2 * Math.PI);
        ctx.stroke();
        
        // Draw inner fill
        ctx.fillStyle = COLORS.userMarker;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 8, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function isPointInHexagon(x, y, hexX, hexY, size) {
    // Simple distance-based collision detection for hexagons
    const distance = Math.sqrt((x - hexX) ** 2 + (y - hexY) ** 2);
    return distance <= size;
}

function setupEventListeners() {
    // Canvas mouse events for interaction
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('click', handleCanvasClick);
    
    // Button events
    document.getElementById('demandSpike').addEventListener('click', simulateDemandSpike);
    document.getElementById('walkButton').addEventListener('click', walkToAdjacent);
    document.getElementById('lowBattery').addEventListener('change', toggleLowBattery);
}

function handleCanvasClick(e) {
    if (isDragging) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Find hexagon that was clicked
    let clickedHex = null;
    let clickedDistance = Infinity;
    
    hexPositions.forEach((pos, hexId) => {
        if (isPointInHexagon(x, y, pos.x, pos.y, pos.size)) {
            const distance = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
            if (distance < clickedDistance) {
                clickedDistance = distance;
                clickedHex = hexId;
            }
        }
    });
    
    if (clickedHex && clickedHex !== currentUserLocation) {
        currentUserLocation = clickedHex;
        drawGrid();
        updateLocationInfo();
        updatePricing();
        
        console.log('User moved to:', currentUserLocation);
    }
}

function handleMouseDown(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if clicking near user marker
    const userPos = hexPositions.get(currentUserLocation);
    if (userPos) {
        const distance = Math.sqrt((x - userPos.x) ** 2 + (y - userPos.y) ** 2);
        if (distance <= 12) {
            isDragging = true;
            canvas.style.cursor = 'grabbing';
            e.preventDefault();
        }
    }
}

function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (!isDragging) {
        // Update cursor based on hover
        const userPos = hexPositions.get(currentUserLocation);
        if (userPos) {
            const distance = Math.sqrt((x - userPos.x) ** 2 + (y - userPos.y) ** 2);
            canvas.style.cursor = distance <= 12 ? 'grab' : 'pointer';
        }
        return;
    }
    
    // Handle dragging - find closest hexagon
    let closestHex = null;
    let closestDistance = Infinity;
    
    hexPositions.forEach((pos, hexId) => {
        const distance = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestHex = hexId;
        }
    });
    
    if (closestHex && closestHex !== currentUserLocation) {
        currentUserLocation = closestHex;
        drawGrid();
        updateLocationInfo();
        updatePricing();
    }
}

function handleMouseUp(e) {
    if (isDragging) {
        isDragging = false;
        canvas.style.cursor = 'pointer';
    }
}

function simulateDemandSpike() {
    const currentHex = APP_DATA.hexagonal_grid.find(h => h.id === currentUserLocation);
    if (!currentHex) return;
    
    // Store original values to show change
    const originalDemand = currentHex.demand_level;
    const originalSurge = currentHex.surge_multiplier;
    
    // Dramatically increase demand and surge
    currentHex.riders += Math.floor(Math.random() * 8) + 5; // Add 5-12 riders
    currentHex.demand_level = 'High';
    const surgeIncrease = 0.5 + Math.random() * 1.0; // Add 0.5-1.5x
    currentHex.surge_multiplier = Math.min(2.8, currentHex.surge_multiplier + surgeIncrease);
    
    // Redraw and update
    drawGrid();
    updateLocationInfo();
    updatePricing();
    
    console.log(`Demand spike! ${originalDemand} -> ${currentHex.demand_level}, ${originalSurge.toFixed(1)}x -> ${currentHex.surge_multiplier.toFixed(1)}x`);
    
    // Show feedback
    const button = document.getElementById('demandSpike');
    const originalText = button.textContent;
    button.textContent = '🔥 Demand Spike Applied!';
    button.disabled = true;
    button.style.background = '#FF8C00';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.background = '';
    }, 2000);
}

function walkToAdjacent() {
    const adjacentHexes = getAdjacentHexes(currentUserLocation);
    
    if (adjacentHexes.length === 0) {
        console.log('No adjacent hexagons found');
        return;
    }
    
    // Pick a random adjacent hex
    const oldLocation = currentUserLocation;
    const newLocation = adjacentHexes[Math.floor(Math.random() * adjacentHexes.length)];
    currentUserLocation = newLocation;
    
    console.log(`Walking from ${oldLocation} to ${newLocation}`);
    
    drawGrid();
    updateLocationInfo();
    updatePricing();
    
    // Show feedback
    const button = document.getElementById('walkButton');
    const originalText = button.textContent;
    button.textContent = '🚶 Moved!';
    button.disabled = true;
    button.style.background = '#00BFFF';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.background = '';
    }, 1000);
}

function getAdjacentHexes(hexId) {
    const coords = hexId.split('_');
    const gridX = parseInt(coords[1]);
    const gridY = parseInt(coords[2]);
    
    // Hexagonal grid neighbors (6 directions)
    const neighbors = [
        `hex_${gridX-1}_${gridY}`,     // Left
        `hex_${gridX+1}_${gridY}`,     // Right
        `hex_${gridX}_${gridY-1}`,     // Up
        `hex_${gridX}_${gridY+1}`,     // Down
        `hex_${gridX-1}_${gridY+1}`,   // Lower left
        `hex_${gridX+1}_${gridY-1}`    // Upper right
    ];
    
    const validNeighbors = neighbors.filter(id => hexPositions.has(id));
    console.log(`Adjacent hexagons for ${hexId}:`, validNeighbors);
    return validNeighbors;
}

function toggleLowBattery(e) {
    lowBatteryMode = e.target.checked;
    console.log('Low battery mode:', lowBatteryMode);
    
    updatePricing();
    
    const batteryPenalty = document.getElementById('batteryPenalty');
    if (lowBatteryMode) {
        batteryPenalty.style.display = 'flex';
    } else {
        batteryPenalty.style.display = 'none';
    }
}

function updateLocationInfo() {
    const currentHex = APP_DATA.hexagonal_grid.find(h => h.id === currentUserLocation);
    if (currentHex) {
        document.getElementById('currentHex').textContent = currentHex.id;
        document.getElementById('currentDemand').textContent = currentHex.demand_level;
        document.getElementById('currentSurge').textContent = `${currentHex.surge_multiplier.toFixed(1)}x`;
        
        console.log('Location updated:', currentHex.id, currentHex.demand_level, `${currentHex.surge_multiplier.toFixed(1)}x`);
    }
}

function updatePricing() {
    const currentHex = APP_DATA.hexagonal_grid.find(h => h.id === currentUserLocation);
    if (!currentHex) return;
    
    const pricing = APP_DATA.pricing_data;
    
    // Base calculation for a typical ride (assume 5km, 20 min)
    const baseFare = pricing.base_fare;
    const distanceCost = pricing.distance_rate * 5; // 5km trip
    const timeCost = pricing.time_rate * 20; // 20 minutes
    const bookingFee = pricing.booking_fee;
    
    const baseTotalBeforeSurge = baseFare + distanceCost + timeCost + bookingFee;
    const surgedTotal = baseTotalBeforeSurge * currentHex.surge_multiplier;
    
    // Low battery penalty (15-25% increase if in high demand area)
    let batteryPenalty = 0;
    if (lowBatteryMode && currentHex.demand_level === 'High') {
        const penaltyRate = 0.15 + Math.random() * 0.10; // 15-25%
        batteryPenalty = Math.floor(surgedTotal * penaltyRate);
    }
    
    const finalPrice = Math.floor(surgedTotal + batteryPenalty);
    
    // Update UI elements
    document.getElementById('currentPrice').textContent = finalPrice;
    document.getElementById('baseCost').textContent = baseTotalBeforeSurge;
    document.getElementById('surgeMultiplier').textContent = currentHex.surge_multiplier.toFixed(1);
    document.getElementById('batteryAmount').textContent = batteryPenalty;
    
    console.log(`Price updated: Base=${baseTotalBeforeSurge}, Surge=${currentHex.surge_multiplier.toFixed(1)}x, Battery=${batteryPenalty}, Final=₹${finalPrice}`);
}