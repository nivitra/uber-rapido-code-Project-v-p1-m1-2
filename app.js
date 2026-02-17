// ════════════════════════════════════════════════════════════
//  UBER/RAPIDO STEP-BY-STEP GUIDED SIMULATION — app.js
//  Nothing runs until START is clicked. Each step activates only
//  when the user navigates to it.
// ════════════════════════════════════════════════════════════

// ──── HEX GRID DATA ────
const GRID_DATA = [
    { id: "hex_-3_-3", row: -3, col: -3, demand: 8, supply: 6, surge: 1.0 },
    { id: "hex_-3_-2", row: -3, col: -2, demand: 12, supply: 5, surge: 1.3 },
    { id: "hex_-3_-1", row: -3, col: -1, demand: 6, supply: 4, surge: 1.1 },
    { id: "hex_-3_0", row: -3, col: 0, demand: 14, supply: 3, surge: 1.8 },
    { id: "hex_-3_1", row: -3, col: 1, demand: 5, supply: 5, surge: 1.0 },
    { id: "hex_-3_2", row: -3, col: 2, demand: 18, supply: 4, surge: 2.0 },
    { id: "hex_-3_3", row: -3, col: 3, demand: 9, supply: 6, surge: 1.2 },
    { id: "hex_-2_-3", row: -2, col: -3, demand: 4, supply: 5, surge: 1.0 },
    { id: "hex_-2_-2", row: -2, col: -2, demand: 10, supply: 4, surge: 1.3 },
    { id: "hex_-2_-1", row: -2, col: -1, demand: 16, supply: 3, surge: 1.7 },
    { id: "hex_-2_0", row: -2, col: 0, demand: 22, supply: 4, surge: 2.2 },
    { id: "hex_-2_1", row: -2, col: 1, demand: 15, supply: 3, surge: 1.9 },
    { id: "hex_-2_2", row: -2, col: 2, demand: 7, supply: 5, surge: 1.1 },
    { id: "hex_-2_3", row: -2, col: 3, demand: 3, supply: 4, surge: 1.0 },
    { id: "hex_-1_-3", row: -1, col: -3, demand: 5, supply: 6, surge: 1.0 },
    { id: "hex_-1_-2", row: -1, col: -2, demand: 14, supply: 3, surge: 1.6 },
    { id: "hex_-1_-1", row: -1, col: -1, demand: 20, supply: 4, surge: 2.1 },
    { id: "hex_-1_0", row: -1, col: 0, demand: 25, supply: 3, surge: 2.4 },
    { id: "hex_-1_1", row: -1, col: 1, demand: 11, supply: 4, surge: 1.5 },
    { id: "hex_-1_2", row: -1, col: 2, demand: 8, supply: 5, surge: 1.2 },
    { id: "hex_-1_3", row: -1, col: 3, demand: 4, supply: 4, surge: 1.0 },
    { id: "hex_0_-3", row: 0, col: -3, demand: 7, supply: 7, surge: 1.0 },
    { id: "hex_0_-2", row: 0, col: -2, demand: 15, supply: 4, surge: 1.7 },
    { id: "hex_0_-1", row: 0, col: -1, demand: 18, supply: 5, surge: 1.9 },
    { id: "hex_0_0", row: 0, col: 0, demand: 20, supply: 6, surge: 1.8 },
    { id: "hex_0_1", row: 0, col: 1, demand: 22, supply: 4, surge: 2.2 },
    { id: "hex_0_2", row: 0, col: 2, demand: 10, supply: 5, surge: 1.3 },
    { id: "hex_0_3", row: 0, col: 3, demand: 6, supply: 4, surge: 1.0 },
    { id: "hex_1_-3", row: 1, col: -3, demand: 3, supply: 5, surge: 1.0 },
    { id: "hex_1_-2", row: 1, col: -2, demand: 12, supply: 4, surge: 1.5 },
    { id: "hex_1_-1", row: 1, col: -1, demand: 16, supply: 3, surge: 1.8 },
    { id: "hex_1_0", row: 1, col: 0, demand: 19, supply: 4, surge: 2.0 },
    { id: "hex_1_1", row: 1, col: 1, demand: 9, supply: 5, surge: 1.3 },
    { id: "hex_1_2", row: 1, col: 2, demand: 7, supply: 3, surge: 1.2 },
    { id: "hex_1_3", row: 1, col: 3, demand: 4, supply: 6, surge: 1.0 },
    { id: "hex_2_-3", row: 2, col: -3, demand: 6, supply: 4, surge: 1.0 },
    { id: "hex_2_-2", row: 2, col: -2, demand: 8, supply: 5, surge: 1.2 },
    { id: "hex_2_-1", row: 2, col: -1, demand: 10, supply: 6, surge: 1.2 },
    { id: "hex_2_0", row: 2, col: 0, demand: 13, supply: 5, surge: 1.5 },
    { id: "hex_2_1", row: 2, col: 1, demand: 11, supply: 4, surge: 1.4 },
    { id: "hex_2_2", row: 2, col: 2, demand: 5, supply: 6, surge: 1.0 },
    { id: "hex_2_3", row: 2, col: 3, demand: 3, supply: 5, surge: 1.0 },
    { id: "hex_3_-3", row: 3, col: -3, demand: 4, supply: 3, surge: 1.0 },
    { id: "hex_3_-2", row: 3, col: -2, demand: 6, supply: 5, surge: 1.1 },
    { id: "hex_3_-1", row: 3, col: -1, demand: 8, supply: 6, surge: 1.1 },
    { id: "hex_3_0", row: 3, col: 0, demand: 7, supply: 5, surge: 1.1 },
    { id: "hex_3_1", row: 3, col: 1, demand: 5, supply: 4, surge: 1.0 },
    { id: "hex_3_2", row: 3, col: 2, demand: 3, supply: 5, surge: 1.0 },
    { id: "hex_3_3", row: 3, col: 3, demand: 2, supply: 4, surge: 1.0 },
];

// ──── GLOBAL STATE ────
const state = {
    currentStep: 0,           // 0=landing, 1-4 = simulation, 5-8 = case studies
    selectedHex: 'hex_0_0',
    hexPositions: new Map(),
    drivers: [],
    pulsePhase: 0,
    tick: 0,
    // Step 2: Algorithm
    matchQueue: [],
    assignmentPhase: -1,      // -1 = waiting for user trigger
    // Step 3: Economics
    questRides: 0,
    questBonusShown: false,
    supplyHistory: [],
    demandHistory: [],
    prevDemand: null,
    isRaining: false,
    // Step 4: ETA
    heavyTraffic: false,
    // Intervals: stored so we can clear them
    activeIntervals: [],
    animFrameId: null,
};

const COLORS = {
    bg: '#09090b',
    lowFill: 'rgba(59,130,246,0.12)', medFill: 'rgba(245,158,11,0.15)', highFill: 'rgba(239,68,68,0.18)',
    lowStroke: 'rgba(59,130,246,0.35)', medStroke: 'rgba(245,158,11,0.4)', highStroke: 'rgba(239,68,68,0.45)',
    driverDot: '#fafafa', riderDot: '#3b82f6', userMarker: '#ef4444',
    text: '#fafafa', textDim: '#71717a',
    green: '#22c55e', orange: '#f59e0b', red: '#ef4444', yellow: '#f59e0b', blue: '#3b82f6',
};

const DRIVER_NAMES = ['Ravi K', 'Suresh M', 'Anil P', 'Kiran R', 'Vijay S', 'Manoj D', 'Deepak T', 'Sanjay V', 'Rahul N', 'Prasad B', 'Arjun G', 'Vikram L', 'Naveen C', 'Ganesh W', 'Rohit Y'];
const riderID = () => 'R' + String(Math.floor(Math.random() * 900) + 100);

// ════════════════════════════════════════════════════════════
//  STEP NAVIGATION
// ════════════════════════════════════════════════════════════
function goToStep(n) {
    // Stop all current intervals
    stopAllIntervals();

    // Hide all steps
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

    // Show target step
    state.currentStep = n;
    const stepEl = document.getElementById('step' + n);
    if (stepEl) {
        stepEl.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Initialize the step's simulation
    if (n === 1) initStep1();
    if (n === 2) initStep2();
    if (n === 3) initStep3();
    if (n === 4) initStep4();
}

function stopAllIntervals() {
    state.activeIntervals.forEach(id => clearInterval(id));
    state.activeIntervals = [];
    if (state.animFrameId) {
        cancelAnimationFrame(state.animFrameId);
        state.animFrameId = null;
    }
}

function addInterval(fn, ms) {
    const id = setInterval(fn, ms);
    state.activeIntervals.push(id);
    return id;
}

// ════════════════════════════════════════════════════════════
//  INIT — EVENT LISTENERS
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    // Start button
    document.getElementById('btnStart').addEventListener('click', () => goToStep(1));

    // Navigation buttons — Simulation steps
    document.getElementById('prev1').addEventListener('click', () => goToStep(0));
    document.getElementById('next1').addEventListener('click', () => goToStep(2));
    document.getElementById('prev2').addEventListener('click', () => goToStep(1));
    document.getElementById('next2').addEventListener('click', () => goToStep(3));
    document.getElementById('prev3').addEventListener('click', () => goToStep(2));
    document.getElementById('next3').addEventListener('click', () => goToStep(4));
    document.getElementById('prev4').addEventListener('click', () => goToStep(3));
    document.getElementById('next4').addEventListener('click', () => goToStep(5));

    // Navigation buttons — Case study steps
    document.getElementById('prev5').addEventListener('click', () => goToStep(4));
    document.getElementById('next5').addEventListener('click', () => goToStep(6));
    document.getElementById('prev6').addEventListener('click', () => goToStep(5));
    document.getElementById('next6').addEventListener('click', () => goToStep(7));
    document.getElementById('prev7').addEventListener('click', () => goToStep(6));
    document.getElementById('next7').addEventListener('click', () => goToStep(8));
    document.getElementById('prev8').addEventListener('click', () => goToStep(7));
    document.getElementById('next8').addEventListener('click', () => goToStep(0));

    // Step 1 controls
    document.getElementById('btnSpike1').addEventListener('click', demandSpike);
    document.getElementById('btnWalk1').addEventListener('click', walkToAdjacent);
    document.getElementById('hexZoomClose').addEventListener('click', () => {
        document.getElementById('hexZoom').style.display = 'none';
    });

    // Step 2 controls
    document.getElementById('btnNewMatch').addEventListener('click', triggerNewMatch);
    document.getElementById('btnResetAssign').addEventListener('click', resetAssignment);

    // Step 3 controls
    document.getElementById('btnAddRide').addEventListener('click', addQuestRide);
    document.getElementById('btnToggleRain').addEventListener('click', toggleRain);

    // Step 4 controls
    document.getElementById('btnRecalcEta').addEventListener('click', recalcETA);
    document.getElementById('btnToggleTraffic').addEventListener('click', toggleHeavyTraffic);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            if (state.currentStep < 8) goToStep(state.currentStep + 1);
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (state.currentStep > 0) goToStep(state.currentStep - 1);
        }
    });

    // Clock
    setInterval(updateClocks, 1000);
    updateClocks();
});

function updateClocks() {
    const t = new Date().toLocaleTimeString('en-IN', { hour12: false });
    ['clock1', 'clock2', 'clock3', 'clock4'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t;
    });
}

// ════════════════════════════════════════════════════════════
//  STEP 1: LIVE MARKETPLACE MAP
// ════════════════════════════════════════════════════════════
let hexCanvas, hexCtx;

function initStep1() {
    hexCanvas = document.getElementById('hexGrid');
    const container = hexCanvas.parentElement;
    const w = Math.min(container.clientWidth - 24, 600);
    const h = w * (5 / 6);
    const dpr = window.devicePixelRatio || 1;

    hexCanvas.width = w * dpr;
    hexCanvas.height = h * dpr;
    hexCanvas.style.width = w + 'px';
    hexCanvas.style.height = h + 'px';
    hexCtx = hexCanvas.getContext('2d');
    hexCtx.scale(dpr, dpr);

    // Calculate hex positions
    state.hexPositions.clear();
    const centerX = w / 2;
    const centerY = h / 2;
    const hexSize = Math.min(w, h) / 14;

    GRID_DATA.forEach(hex => {
        const hW = hexSize * 1.5;
        const hH = Math.sqrt(3) * hexSize;
        const x = centerX + hex.col * hW;
        const y = centerY + hex.row * hH + (hex.col % 2 !== 0 ? hH / 2 : 0);
        state.hexPositions.set(hex.id, { x, y, size: hexSize, hex });
    });

    // Initialize drivers
    state.drivers = [];
    state.hexPositions.forEach((pos) => {
        const hex = pos.hex;
        for (let i = 0; i < hex.supply; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * pos.size * 0.5;
            state.drivers.push({
                hexId: hex.id,
                x: pos.x + Math.cos(angle) * dist,
                y: pos.y + Math.sin(angle) * dist + pos.size * 0.35,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                phase: Math.random(),
            });
        }
    });

    hexCanvas.onclick = onHexClick;

    // Start animations
    function animLoop() {
        state.pulsePhase = (state.pulsePhase + 0.015) % 1;
        drawHexGrid(w, h);
        state.animFrameId = requestAnimationFrame(animLoop);
    }
    state.animFrameId = requestAnimationFrame(animLoop);

    // Fluctuate demand every 4s
    addInterval(() => {
        GRID_DATA.forEach(hex => {
            hex.demand = Math.max(1, hex.demand + Math.floor(Math.random() * 5) - 2);
            hex.supply = Math.max(1, hex.supply + Math.floor(Math.random() * 3) - 1);
            recalcSurge(hex);
        });
    }, 4000);
}

function getDemandLevel(hex) {
    const r = hex.demand / Math.max(hex.supply, 1);
    return r >= 3 ? 'High' : r >= 1.5 ? 'Medium' : 'Low';
}

function getDemandColors(hex) {
    const l = getDemandLevel(hex);
    if (l === 'High') return { fill: COLORS.highFill, stroke: COLORS.highStroke };
    if (l === 'Medium') return { fill: COLORS.medFill, stroke: COLORS.medStroke };
    return { fill: COLORS.lowFill, stroke: COLORS.lowStroke };
}

function drawHexGrid(w, h) {
    hexCtx.clearRect(0, 0, w, h);
    hexCtx.fillStyle = COLORS.bg;
    hexCtx.fillRect(0, 0, w, h);

    state.hexPositions.forEach((pos, hexId) => {
        drawSingleHex(pos, hexId === state.selectedHex);
    });
    drawDriverDots();
    drawUserMarker();
}

function drawSingleHex(pos, isSelected) {
    const { x, y, size, hex } = pos;
    const c = getDemandColors(hex);

    hexCtx.beginPath();
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(a);
        const hy = y + size * Math.sin(a);
        i === 0 ? hexCtx.moveTo(hx, hy) : hexCtx.lineTo(hx, hy);
    }
    hexCtx.closePath();
    hexCtx.fillStyle = c.fill;
    hexCtx.fill();
    hexCtx.strokeStyle = isSelected ? COLORS.userMarker : c.stroke;
    hexCtx.lineWidth = isSelected ? 2.5 : 1;
    hexCtx.stroke();

    // Labels
    const fs = Math.max(8, size * 0.28);
    hexCtx.fillStyle = COLORS.textDim;
    hexCtx.font = `${fs}px JetBrains Mono, monospace`;
    hexCtx.textAlign = 'center';
    hexCtx.fillText(getDemandLevel(hex), x, y - size * 0.15);

    hexCtx.fillStyle = hex.surge > 1.5 ? COLORS.orange : COLORS.text;
    hexCtx.font = `bold ${Math.max(9, size * 0.32)}px JetBrains Mono, monospace`;
    hexCtx.fillText(hex.surge.toFixed(1) + 'x', x, y + size * 0.15);
}

function drawDriverDots() {
    state.drivers.forEach(d => {
        const pos = state.hexPositions.get(d.hexId);
        if (!pos) return;

        d.x += d.vx;
        d.y += d.vy;
        const dx = d.x - pos.x;
        const dy = d.y - (pos.y + pos.size * 0.35);
        if (Math.sqrt(dx * dx + dy * dy) > pos.size * 0.55) {
            d.vx *= -1; d.vy *= -1;
            d.x += d.vx * 2; d.y += d.vy * 2;
        }

        // Pulse ring
        const pt = (state.pulsePhase + d.phase) % 1;
        hexCtx.beginPath();
        hexCtx.arc(d.x, d.y, 2 + pt * 6, 0, Math.PI * 2);
        hexCtx.fillStyle = `rgba(59,130,246,${(1 - pt) * 0.15})`;
        hexCtx.fill();

        // Dot
        hexCtx.beginPath();
        hexCtx.arc(d.x, d.y, 2.5, 0, Math.PI * 2);
        hexCtx.fillStyle = COLORS.driverDot;
        hexCtx.fill();
    });

    // Rider dots
    state.hexPositions.forEach(pos => {
        for (let i = 0; i < Math.min(pos.hex.demand, 6); i++) {
            const a = (Math.PI * 2 * i) / Math.max(pos.hex.demand, 1) + 0.5;
            const dist = pos.size * 0.3 + Math.sin(Date.now() * 0.001 + i) * 3;
            hexCtx.beginPath();
            hexCtx.arc(pos.x + Math.cos(a) * dist, pos.y + Math.sin(a) * dist + pos.size * 0.35, 2, 0, Math.PI * 2);
            hexCtx.fillStyle = COLORS.riderDot;
            hexCtx.fill();
        }
    });
}

function drawUserMarker() {
    const pos = state.hexPositions.get(state.selectedHex);
    if (!pos) return;
    hexCtx.beginPath();
    hexCtx.arc(pos.x, pos.y, 12, 0, Math.PI * 2);
    hexCtx.fillStyle = 'rgba(239,68,68,0.1)';
    hexCtx.fill();
    hexCtx.beginPath();
    hexCtx.arc(pos.x, pos.y, 9, 0, Math.PI * 2);
    hexCtx.strokeStyle = '#fff';
    hexCtx.lineWidth = 2;
    hexCtx.stroke();
    hexCtx.beginPath();
    hexCtx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
    hexCtx.fillStyle = COLORS.userMarker;
    hexCtx.fill();
}

function onHexClick(e) {
    const rect = hexCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let closest = null, closestDist = Infinity;
    state.hexPositions.forEach((pos, hexId) => {
        const dist = Math.sqrt((mx - pos.x) ** 2 + (my - pos.y) ** 2);
        if (dist < pos.size && dist < closestDist) {
            closestDist = dist;
            closest = hexId;
        }
    });

    if (closest) {
        state.selectedHex = closest;
        const hex = GRID_DATA.find(h => h.id === closest);
        if (!hex) return;

        document.getElementById('zoomHexId').textContent = hexIdToLabel(closest);
        document.getElementById('zoomDrivers').textContent = hex.supply;
        document.getElementById('zoomRequests').textContent = hex.demand;
        document.getElementById('zoomSurge').textContent = hex.surge.toFixed(1) + 'x';

        const ratio = hex.demand / Math.max(hex.supply, 1);
        const pct = Math.min(ratio / 5 * 100, 100);
        const fill = document.getElementById('zoomDemandFill');
        fill.style.width = pct + '%';
        fill.style.background = ratio > 3 ? COLORS.red : ratio > 1.5 ? COLORS.yellow : COLORS.blue;

        document.getElementById('hexZoom').style.display = 'flex';
    }
}

function hexIdToLabel(id) {
    const parts = id.split('_');
    return `Cell (${parts[1]}, ${parts[2]})`;
}

function demandSpike() {
    const hex = GRID_DATA.find(h => h.id === state.selectedHex);
    if (!hex) return;
    hex.demand += Math.floor(Math.random() * 10) + 5;
    recalcSurge(hex);
    const btn = document.getElementById('btnSpike1');
    btn.textContent = 'Spike Applied!';
    setTimeout(() => { btn.textContent = 'Simulate Demand Spike'; }, 1500);
}

function walkToAdjacent() {
    const cur = GRID_DATA.find(h => h.id === state.selectedHex);
    if (!cur) return;
    const neighbors = GRID_DATA.filter(h =>
        Math.abs(h.row - cur.row) <= 1 && Math.abs(h.col - cur.col) <= 1 && h.id !== cur.id
    );
    if (neighbors.length > 0) {
        state.selectedHex = neighbors[Math.floor(Math.random() * neighbors.length)].id;
    }
    const btn = document.getElementById('btnWalk1');
    btn.textContent = 'Moved!';
    setTimeout(() => { btn.textContent = 'Walk to Adjacent Hex'; }, 1000);
}

function recalcSurge(hex) {
    const ratio = hex.demand / Math.max(hex.supply, 1);
    const delta = Math.max(0, hex.demand - hex.supply);
    hex.surge = Math.min(3.0, +(1.0 + 0.3 * ratio + 0.05 * delta).toFixed(1));
}

// ════════════════════════════════════════════════════════════
//  STEP 2: ALGORITHM INSPECTOR
// ════════════════════════════════════════════════════════════
let assignCanvas, assignCtx;

function initStep2() {
    state.matchQueue = [];
    state.assignmentPhase = -1;

    // Init assignment canvas
    assignCanvas = document.getElementById('assignmentCanvas');
    const container = assignCanvas.parentElement;
    const w = container.clientWidth;
    const dpr = window.devicePixelRatio || 1;
    assignCanvas.width = w * dpr;
    assignCanvas.height = 130 * dpr;
    assignCanvas.style.width = w + 'px';
    assignCanvas.style.height = '130px';
    assignCtx = assignCanvas.getContext('2d');
    assignCtx.scale(dpr, dpr);

    // Render initial state
    drawAssignment(w);
    updateAcceptanceCard();
    updateCostFormula();

    document.getElementById('matchQueue').innerHTML =
        '<div style="text-align:center; padding:20px; color:rgba(226,232,240,0.4); font-size:12px;">Click "Trigger New Match" to start →</div>';
    document.getElementById('assignmentStatus').textContent = 'Click "Trigger New Match" to start';
}

function triggerNewMatch() {
    // Add a queue item
    const riderId = riderID();
    const hex = GRID_DATA[Math.floor(Math.random() * GRID_DATA.length)];
    state.matchQueue.push({ riderId, hexId: hex.id, time: new Date() });
    if (state.matchQueue.length > 8) state.matchQueue.shift();
    renderMatchQueue();

    // Update acceptance card
    updateAcceptanceCard();

    // Start assignment sequence: ping 3 drivers with rejection cascade
    state.assignmentPhase = 0;
    drawAssignmentAnimated();

    // Update cost formula
    updateCostFormula();
}

function renderMatchQueue() {
    const container = document.getElementById('matchQueue');
    container.innerHTML = '';
    state.matchQueue.forEach(item => {
        const el = document.createElement('div');
        el.className = 'match-queue-item';
        el.innerHTML = `
            <span class="queue-ping">●</span>
            Rider <strong>${item.riderId}</strong> → Cell
            <span class="queue-hex">${hexIdToLabel(item.hexId)}</span>
            <span class="queue-time">${item.time.toLocaleTimeString('en-IN', { hour12: false })}</span>
        `;
        container.appendChild(el);
    });
    container.scrollTop = container.scrollHeight;
}

function updateAcceptanceCard() {
    const driver = DRIVER_NAMES[Math.floor(Math.random() * DRIVER_NAMES.length)];
    const dist = (1 + Math.random() * 4).toFixed(1);
    const questProg = `${Math.floor(Math.random() * 12)}/12`;
    const rating = (4.2 + Math.random() * 0.7).toFixed(1);
    const acceptRate = Math.floor(80 + Math.random() * 18);
    const idleMin = Math.floor(1 + Math.random() * 8);

    document.getElementById('acDriverName').textContent = `Driver ${driver}`;
    document.getElementById('acDriverRating').textContent = `★ ${rating}`;
    document.getElementById('fDist').textContent = `${dist}km`;
    document.getElementById('fQuest').textContent = questProg;
    document.getElementById('fRating').textContent = rating;
    document.getElementById('fAccept').textContent = `${acceptRate}%`;
    document.getElementById('fIdle').textContent = `${idleMin}m`;

    const score = Math.max(30, Math.min(99, Math.floor(
        (0.3 * (5 - parseFloat(dist)) / 5 * 100) +
        (0.2 * parseInt(questProg) / 12 * 100) +
        (0.25 * parseFloat(rating) / 5 * 100) +
        (0.15 * acceptRate) +
        (0.1 * (10 - idleMin) / 10 * 100)
    )));

    document.getElementById('scoreBarFill').style.width = score + '%';
    document.getElementById('scoreValue').textContent = score + '%';
}

function drawAssignmentAnimated() {
    const statuses = [
        '🔍 Pinging Driver #1...',
        '❌ Driver #1 rejected — trying #2...',
        '❌ Driver #2 rejected — trying #3...',
        '✅ Driver #3 accepted! Ride confirmed.',
    ];

    let phase = 0;
    const w = assignCanvas.width / (window.devicePixelRatio || 1);

    // Show each phase with 1.5s delay
    function showPhase() {
        state.assignmentPhase = phase;
        drawAssignment(w);
        document.getElementById('assignmentStatus').textContent = statuses[phase];

        if (phase < 3) {
            phase++;
            setTimeout(showPhase, 1500);
        }
    }
    showPhase();
}

function drawAssignment(w) {
    const h = 130;
    assignCtx.clearRect(0, 0, w, h);

    const riderX = 40, riderY = 65;
    const drivers = [
        { x: w - 50, y: 25, label: 'D1' },
        { x: w - 50, y: 65, label: 'D2' },
        { x: w - 50, y: 105, label: 'D3' },
    ];

    // Lines
    drivers.forEach((d, i) => {
        const rejected = (state.assignmentPhase > i && i < 2);
        const active = (state.assignmentPhase === i) || (i === 2 && state.assignmentPhase >= 2);
        const waiting = state.assignmentPhase < i;

        assignCtx.beginPath();
        assignCtx.moveTo(riderX + 14, riderY);
        assignCtx.lineTo(d.x - 14, d.y);
        assignCtx.strokeStyle = rejected ? 'rgba(239,68,68,0.25)' :
            active ? COLORS.green : 'rgba(255,255,255,0.05)';
        assignCtx.lineWidth = active ? 2 : 1;
        assignCtx.setLineDash(active ? [] : [4, 4]);
        assignCtx.stroke();
        assignCtx.setLineDash([]);

        // Markers
        if (rejected) {
            const mx = (riderX + 14 + d.x - 14) / 2;
            const my = (riderY + d.y) / 2;
            assignCtx.fillStyle = COLORS.red;
            assignCtx.font = 'bold 14px Inter, sans-serif';
            assignCtx.textAlign = 'center';
            assignCtx.fillText('✕', mx, my + 5);
        }
        if (i === 2 && state.assignmentPhase >= 3) {
            const mx = (riderX + 14 + d.x - 14) / 2;
            const my = (riderY + d.y) / 2;
            assignCtx.fillStyle = COLORS.green;
            assignCtx.font = 'bold 16px Inter, sans-serif';
            assignCtx.textAlign = 'center';
            assignCtx.fillText('✓', mx, my + 5);
        }
    });

    // Rider
    assignCtx.beginPath();
    assignCtx.arc(riderX, riderY, 14, 0, Math.PI * 2);
    assignCtx.fillStyle = 'rgba(59,130,246,0.1)';
    assignCtx.fill();
    assignCtx.strokeStyle = COLORS.blue;
    assignCtx.lineWidth = 2;
    assignCtx.stroke();
    assignCtx.fillStyle = COLORS.text;
    assignCtx.font = '14px sans-serif';
    assignCtx.textAlign = 'center';
    assignCtx.fillText('👤', riderX, riderY + 5);

    // Drivers
    drivers.forEach((d, i) => {
        const rejected = (state.assignmentPhase > i && i < 2);
        const accepted = (i === 2 && state.assignmentPhase >= 2);
        assignCtx.beginPath();
        assignCtx.arc(d.x, d.y, 14, 0, Math.PI * 2);
        assignCtx.fillStyle = rejected ? 'rgba(239,68,68,0.08)' :
            accepted ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)';
        assignCtx.fill();
        assignCtx.strokeStyle = rejected ? COLORS.red :
            accepted ? COLORS.green : 'rgba(255,255,255,0.12)';
        assignCtx.lineWidth = 1.5;
        assignCtx.stroke();
        assignCtx.fillStyle = rejected ? 'rgba(255,255,255,0.2)' : COLORS.text;
        assignCtx.font = '14px sans-serif';
        assignCtx.textAlign = 'center';
        assignCtx.fillText('🚗', d.x, d.y + 5);
    });
}

function resetAssignment() {
    state.assignmentPhase = -1;
    const w = assignCanvas.width / (window.devicePixelRatio || 1);
    drawAssignment(w);
    document.getElementById('assignmentStatus').textContent = 'Click "Trigger New Match" to start';
}

function updateCostFormula() {
    const hex = GRID_DATA.find(h => h.id === state.selectedHex) || GRID_DATA[0];
    const distance = +(3 + Math.random() * 7).toFixed(1);
    const eta = +(4 + Math.random() * 8).toFixed(0);
    const driverProb = +(0.6 + Math.random() * 0.35).toFixed(2);

    const costDist = 0.45 * distance * 12;
    const costEta = 0.30 * eta * 2;
    const costProb = 0.25 * (1 / driverProb) * 50;
    const total = (costDist + costEta + costProb) * hex.surge;

    document.getElementById('cfDist').textContent = `₹${costDist.toFixed(0)} (${distance}km × ₹12)`;
    document.getElementById('cfEta').textContent = `₹${costEta.toFixed(0)} (${eta}min × ₹2)`;
    document.getElementById('cfProb').textContent = `₹${costProb.toFixed(0)} (prob=${driverProb})`;
    document.getElementById('cfTotal').textContent = `₹${Math.floor(total)} (× ${hex.surge.toFixed(1)} surge)`;
}

// ════════════════════════════════════════════════════════════
//  STEP 3: ECONOMICS ENGINE
//  All values are deterministic and verifiable.
//  Supply/demand from the chart drives surge, surge drives fare.
// ════════════════════════════════════════════════════════════
let sdCanvas, sdCtx;

// Fixed trip parameters for the fare calculation
const TRIP = {
    distance: 5.2,       // km
    duration: 14,        // minutes
    baseFare: 30,        // ₹
    ratePerKm: 12,       // ₹/km
    ratePerMin: 2,       // ₹/min
    bookingFee: 25,      // ₹
    rainMultiplier: 1.25, // fixed rain surcharge
};
const SURGE_ALPHA = 0.30;
const SURGE_BETA = 0.05;
const SURGE_CAP = 3.0;

function initStep3() {
    state.questRides = 0;
    state.questBonusShown = false;
    state.isRaining = false;
    state.supplyHistory = [];
    state.demandHistory = [];
    state.prevDemand = null;  // for ΔD calculation

    // Seed chart history with realistic data
    let d = 38, s = 32;
    for (let i = 0; i < 20; i++) {
        d = Math.max(15, Math.min(65, d + Math.floor(Math.random() * 7) - 3));
        s = Math.max(12, Math.min(50, s + Math.floor(Math.random() * 5) - 2));
        state.supplyHistory.push(s);
        state.demandHistory.push(d);
    }
    state.prevDemand = state.demandHistory[state.demandHistory.length - 2];

    // Init chart canvas
    sdCanvas = document.getElementById('supplyDemandChart');
    const container = sdCanvas.parentElement;
    const w = container.clientWidth;
    const dpr = window.devicePixelRatio || 1;
    sdCanvas.width = w * dpr;
    sdCanvas.height = 180 * dpr;
    sdCanvas.style.width = w + 'px';
    sdCanvas.style.height = '180px';
    sdCtx = sdCanvas.getContext('2d');
    sdCtx.scale(dpr, dpr);

    drawSupplyDemandChart(w);
    updateEconomics();
    updateQuestUI();

    // Live chart updates every 2s
    addInterval(() => {
        const lastD = state.demandHistory[state.demandHistory.length - 1];
        const lastS = state.supplyHistory[state.supplyHistory.length - 1];

        state.prevDemand = lastD;
        const newD = Math.max(15, Math.min(65, lastD + Math.floor(Math.random() * 9) - 4));
        const newS = Math.max(12, Math.min(50, lastS + Math.floor(Math.random() * 5) - 2));

        state.demandHistory.push(newD);
        state.supplyHistory.push(newS);
        if (state.demandHistory.length > 30) { state.demandHistory.shift(); state.supplyHistory.shift(); }

        const w2 = sdCanvas.width / dpr;
        drawSupplyDemandChart(w2);
        updateEconomics();
    }, 2000);
}

function drawSupplyDemandChart(w) {
    const h = 180;
    sdCtx.clearRect(0, 0, w, h);

    const maxVal = Math.max(...state.supplyHistory, ...state.demandHistory) + 5;
    const pad = { top: 15, bottom: 25, left: 40, right: 10 };
    const cW = w - pad.left - pad.right;
    const cH = h - pad.top - pad.bottom;

    // Grid lines
    sdCtx.strokeStyle = 'rgba(255,255,255,0.03)';
    sdCtx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = pad.top + (cH / 4) * i;
        sdCtx.beginPath();
        sdCtx.moveTo(pad.left, y);
        sdCtx.lineTo(w - pad.right, y);
        sdCtx.stroke();
        sdCtx.fillStyle = COLORS.textDim;
        sdCtx.font = '9px IBM Plex Mono, monospace';
        sdCtx.textAlign = 'right';
        sdCtx.fillText(Math.round(maxVal - (maxVal / 4) * i), pad.left - 5, y + 3);
    }

    const len = state.demandHistory.length;
    const stepX = cW / Math.max(len - 1, 1);

    // Demand line (amber)
    sdCtx.beginPath();
    state.demandHistory.forEach((v, i) => {
        const x = pad.left + i * stepX;
        const y = pad.top + cH - (v / maxVal) * cH;
        i === 0 ? sdCtx.moveTo(x, y) : sdCtx.lineTo(x, y);
    });
    sdCtx.strokeStyle = COLORS.orange;
    sdCtx.lineWidth = 2;
    sdCtx.stroke();
    sdCtx.lineTo(pad.left + (len - 1) * stepX, pad.top + cH);
    sdCtx.lineTo(pad.left, pad.top + cH);
    sdCtx.closePath();
    sdCtx.fillStyle = 'rgba(245,158,11,0.06)';
    sdCtx.fill();

    // Supply line (blue)
    sdCtx.beginPath();
    state.supplyHistory.forEach((v, i) => {
        const x = pad.left + i * stepX;
        const y = pad.top + cH - (v / maxVal) * cH;
        i === 0 ? sdCtx.moveTo(x, y) : sdCtx.lineTo(x, y);
    });
    sdCtx.strokeStyle = COLORS.blue;
    sdCtx.lineWidth = 2;
    sdCtx.stroke();
    sdCtx.lineTo(pad.left + (len - 1) * stepX, pad.top + cH);
    sdCtx.lineTo(pad.left, pad.top + cH);
    sdCtx.closePath();
    sdCtx.fillStyle = 'rgba(59,130,246,0.05)';
    sdCtx.fill();

    // Legend
    sdCtx.fillStyle = COLORS.orange;
    sdCtx.fillRect(pad.left + 5, h - 15, 12, 3);
    sdCtx.fillStyle = COLORS.textDim;
    sdCtx.font = '9px IBM Plex Mono, monospace';
    sdCtx.textAlign = 'left';
    sdCtx.fillText('Demand (D)', pad.left + 22, h - 12);
    sdCtx.fillStyle = COLORS.blue;
    sdCtx.fillRect(pad.left + 110, h - 15, 12, 3);
    sdCtx.fillStyle = COLORS.textDim;
    sdCtx.fillText('Supply (S)', pad.left + 127, h - 12);
}

// ─── CORE: Compute surge from chart data, then compute fare from surge ───
function updateEconomics() {
    // Current D, S, ΔD from the live chart
    const D = state.demandHistory[state.demandHistory.length - 1];
    const S = state.supplyHistory[state.supplyHistory.length - 1];
    const prevD = state.prevDemand || D;
    const deltaD = Math.max(0, D - prevD);  // only positive changes trigger surge

    // ── Surge computation (each step shown) ──
    const ratio = D / Math.max(S, 1);              // D/S
    const alphaComponent = SURGE_ALPHA * ratio;     // 0.30 × (D/S)
    const betaComponent = SURGE_BETA * deltaD;      // 0.05 × ΔD
    const uncapped = 1.0 + alphaComponent + betaComponent;
    const surge = Math.min(SURGE_CAP, uncapped);

    // Populate the surge card — every value is verifiable
    document.getElementById('sfDemand').textContent = D;
    document.getElementById('sfSupply').textContent = S;
    document.getElementById('sfDelta').textContent = deltaD;

    document.getElementById('sbBase').textContent = '1.00';
    document.getElementById('sbRatioCalc').textContent = ratio.toFixed(2);
    document.getElementById('sbAlpha').textContent = '+' + alphaComponent.toFixed(2);
    document.getElementById('sbDeltaCalc').textContent = deltaD;
    document.getElementById('sbBeta').textContent = '+' + betaComponent.toFixed(2);
    document.getElementById('sbUncapped').textContent = uncapped.toFixed(2);
    document.getElementById('sbTotal').textContent = surge.toFixed(2) + 'x';

    // Surge alert
    document.getElementById('surgeAlert').style.display = surge > 1.5 ? 'block' : 'none';

    // ── Fare computation (deterministic, fully additive) ──
    const distCost = TRIP.distance * TRIP.ratePerKm;     // 5.2 × 12 = 62.40
    const timeCost = TRIP.duration * TRIP.ratePerMin;     // 14 × 2 = 28.00
    const subtotal = TRIP.baseFare + distCost + timeCost + TRIP.bookingFee;  // 30 + 62.40 + 28 + 25 = 145.40

    let afterSurge = subtotal * surge;
    let rainMult = 1.0;
    if (state.isRaining) {
        rainMult = TRIP.rainMultiplier;
        afterSurge = afterSurge * rainMult;
    }
    const finalFare = Math.round(afterSurge);

    document.getElementById('fareBase').textContent = '₹' + TRIP.baseFare;
    document.getElementById('fareDist').textContent = TRIP.distance.toFixed(1);
    document.getElementById('fareDistRate').textContent = TRIP.ratePerKm;
    document.getElementById('fareDistTotal').textContent = '₹' + distCost.toFixed(2);
    document.getElementById('fareTime').textContent = TRIP.duration;
    document.getElementById('fareTimeRate').textContent = TRIP.ratePerMin;
    document.getElementById('fareTimeTotal').textContent = '₹' + timeCost.toFixed(2);
    document.getElementById('fareBooking').textContent = '₹' + TRIP.bookingFee;
    document.getElementById('fareSubtotal').textContent = '₹' + subtotal.toFixed(2);
    document.getElementById('fareSurge').textContent = surge.toFixed(2) + 'x';

    const rainRow = document.getElementById('fareRainRow');
    if (state.isRaining) {
        rainRow.style.display = 'flex';
        document.getElementById('fareRainMult').textContent = rainMult.toFixed(2) + 'x';
    } else {
        rainRow.style.display = 'none';
    }
    document.getElementById('fareFinal').textContent = '₹' + finalFare;
}

function addQuestRide() {
    if (state.questRides >= 12) return;
    state.questRides++;
    updateQuestUI();

    if (state.questRides >= 12 && !state.questBonusShown) {
        state.questBonusShown = true;
        const popup = document.getElementById('questBonus');
        popup.style.display = 'flex';
        setTimeout(() => { popup.style.display = 'none'; }, 3500);
    }
}

function updateQuestUI() {
    document.getElementById('questCount').textContent = state.questRides;
    document.getElementById('questBarFill').style.width = (state.questRides / 12 * 100) + '%';

    // Effective per-ride premium diminishes as rides accumulate (sunk cost)
    const remaining = 12 - state.questRides;
    const perRide = remaining > 0 ? Math.round(600 / remaining) : 0;
    const el = document.getElementById('questPerRide');
    if (el) el.textContent = remaining > 0 ? perRide : '—';
}

function toggleRain() {
    state.isRaining = !state.isRaining;
    updateEconomics();
    const btn = document.getElementById('btnToggleRain');
    btn.textContent = state.isRaining ? 'Turn Off Rain' : 'Toggle Rain Conditions';
}

// ════════════════════════════════════════════════════════════
//  STEP 4: ETA ML PREDICTOR
// ════════════════════════════════════════════════════════════
function initStep4() {
    state.heavyTraffic = false;
    recalcETA();
}

function recalcETA() {
    // Feature weights — traffic dominates more if heavy
    let traffic = state.heavyTraffic ? 60 + Math.floor(Math.random() * 20) : 30 + Math.floor(Math.random() * 30);
    let junction = 10 + Math.floor(Math.random() * 20);
    let speed = 5 + Math.floor(Math.random() * 15);
    let weather = state.isRaining ? 8 + Math.floor(Math.random() * 12) : Math.floor(Math.random() * 5);
    let route = Math.floor(Math.random() * 10);
    const total = traffic + junction + speed + weather + route;
    traffic = Math.round(traffic / total * 100);
    junction = Math.round(junction / total * 100);
    speed = Math.round(speed / total * 100);
    weather = Math.round(weather / total * 100);
    route = Math.max(0, 100 - traffic - junction - speed - weather);

    document.getElementById('fwTraffic').style.width = traffic + '%';
    document.getElementById('fwTrafficPct').textContent = traffic + '%';
    document.getElementById('fwJunction').style.width = junction + '%';
    document.getElementById('fwJunctionPct').textContent = junction + '%';
    document.getElementById('fwSpeed').style.width = speed + '%';
    document.getElementById('fwSpeedPct').textContent = speed + '%';
    document.getElementById('fwWeather').style.width = weather + '%';
    document.getElementById('fwWeatherPct').textContent = weather + '%';
    document.getElementById('fwRoute').style.width = route + '%';
    document.getElementById('fwRoutePct').textContent = route + '%';

    // ETA prediction
    const baseETA = state.heavyTraffic ? 6 + Math.random() * 6 : 3 + Math.random() * 5;
    const optimistic = baseETA - 0.5 - Math.random() * 1;
    const pessimistic = baseETA + 0.5 + Math.random() * 2;

    const fmt = (mins) => {
        const m = Math.floor(mins);
        const s = Math.floor((mins - m) * 60);
        return `${m}:${String(s).padStart(2, '0')}`;
    };

    document.getElementById('predEta').textContent = fmt(baseETA);
    document.getElementById('predOptimistic').textContent = fmt(optimistic) + ' min';
    document.getElementById('predPessimistic').textContent = fmt(pessimistic) + ' min';

    const range = pessimistic - optimistic;
    const pos = (baseETA - optimistic) / range;
    document.getElementById('rangeThumb').style.left = (pos * 100) + '%';
    document.getElementById('rangeFill').style.left = (pos * 100 - 5) + '%';
    document.getElementById('rangeFill').style.width = '10%';

    // Confidence
    const confidence = state.heavyTraffic ?
        Math.floor(55 + Math.random() * 20) :
        Math.floor(75 + Math.random() * 20);
    document.getElementById('confValue').textContent = confidence + '%';
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (confidence / 100) * circumference;
    document.getElementById('confFill').style.strokeDashoffset = offset;

    const confFill = document.getElementById('confFill');
    confFill.style.stroke = confidence >= 85 ? COLORS.green : confidence >= 70 ? COLORS.yellow : COLORS.orange;
}

function toggleHeavyTraffic() {
    state.heavyTraffic = !state.heavyTraffic;
    recalcETA();
    const btn = document.getElementById('btnToggleTraffic');
    btn.textContent = state.heavyTraffic ? 'Normal Traffic' : 'Toggle Heavy Traffic';
}