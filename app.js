// Datos de evaluación y ejemplo
const evaluationData = {
  "evaluation_schema": {
    "criteria": {
      "entrada_datos": {
        "weight": 0.15,
        "optimal_cost": {"min": 0.02, "max": 0.08},
        "optimal_tokens": {"min": 50, "max": 200},
        "optimal_time": {"min": 1, "max": 5}
      },
      "generacion_ideas": {
        "weight": 0.18,
        "optimal_cost": {"min": 0.08, "max": 0.20},
        "optimal_tokens": {"min": 200, "max": 400},
        "optimal_time": {"min": 5, "max": 12}
      },
      "creacion_contenido": {
        "weight": 0.25,
        "optimal_cost": {"min": 0.25, "max": 0.60},
        "optimal_tokens": {"min": 500, "max": 1200},
        "optimal_time": {"min": 10, "max": 20}
      },
      "validacion_contenido": {
        "weight": 0.20,
        "optimal_cost": {"min": 0.15, "max": 0.35},
        "optimal_tokens": {"min": 300, "max": 700},
        "optimal_time": {"min": 8, "max": 15}
      },
      "formateo_plataformas": {
        "weight": 0.12,
        "optimal_cost": {"min": 0.05, "max": 0.15},
        "optimal_tokens": {"min": 100, "max": 300},
        "optimal_time": {"min": 3, "max": 8}
      },
      "revision_final": {
        "weight": 0.08,
        "optimal_cost": {"min": 0.03, "max": 0.12},
        "optimal_tokens": {"min": 80, "max": 250},
        "optimal_time": {"min": 2, "max": 10}
      },
      "salida_publicacion": {
        "weight": 0.02,
        "optimal_cost": {"min": 0.01, "max": 0.05},
        "optimal_tokens": {"min": 20, "max": 100},
        "optimal_time": {"min": 1, "max": 5}
      }
    },
    "scoring_rules": {
      "excellent": {"min": 90, "color": "#22c55e", "message": "Excelente rendimiento"},
      "good": {"min": 80, "color": "#f59e0b", "message": "Buen rendimiento, optimizaciones menores"},
      "needs_improvement": {"min": 70, "color": "#f97316", "message": "Necesita mejoras significativas"},
      "critical": {"min": 0, "color": "#ef4444", "message": "Crítico - Requiere atención inmediata"}
    }
  },
  "sample_workflow": {
    "workflow_name": "Creación de Contenido Social Media",
    "nodos": [
      {
        "id": "entrada_datos",
        "type": "entrada_datos",
        "model": "gpt-3.5-turbo",
        "temperature": 0.1,
        "max_tokens": 150,
        "prompt": "Valida y sanitiza los datos de entrada proporcionados por el usuario según el esquema definido. Verifica formato y contenido.",
        "costo_estimado": 0.05,
        "tiempo_estimado": 2
      },
      {
        "id": "generacion_ideas",
        "type": "generacion_ideas", 
        "model": "gpt-4o",
        "temperature": 0.7,
        "max_tokens": 400,
        "prompt": "Genera 5 ideas creativas de contenido para redes sociales basadas en el tema proporcionado. Considera tendencias actuales y engagement.",
        "costo_estimado": 0.20,
        "tiempo_estimado": 8
      },
      {
        "id": "creacion_contenido",
        "type": "creacion_contenido",
        "model": "gpt-4o",
        "temperature": 0.6,
        "max_tokens": 1000,
        "prompt": "Crea contenido de alta calidad para la idea seleccionada. Incluye copy principal, hashtags y call-to-action. Adapta el tono para la audiencia objetivo.",
        "costo_estimado": 0.50,
        "tiempo_estimado": 15
      },
      {
        "id": "validacion_contenido", 
        "type": "validacion_contenido",
        "model": "gpt-4o",
        "temperature": 0.2,
        "max_tokens": 600,
        "prompt": "Evalúa el contenido creado según los criterios de calidad: relevancia, engagement potential, brand compliance, grammar. Asigna puntuación 1-10.",
        "costo_estimado": 0.30,
        "tiempo_estimado": 12
      },
      {
        "id": "formateo_plataformas",
        "type": "formateo_plataformas",
        "model": "gpt-3.5-turbo-16k",
        "temperature": 0.3,
        "max_tokens": 350,
        "prompt": "Adapta el contenido para diferentes plataformas: Instagram, LinkedIn, Twitter. Respeta límites de caracteres y mejores prácticas de cada plataforma.",
        "costo_estimado": 0.12,
        "tiempo_estimado": 5
      },
      {
        "id": "revision_final",
        "type": "revision_final",
        "model": "gpt-4o-mini",
        "temperature": 0.2,
        "max_tokens": 300,
        "prompt": "Realiza revisión final del contenido: verifica gramática, coherencia, compliance con guidelines. Marca como aprobado o solicita cambios específicos.",
        "costo_estimado": 0.08,
        "tiempo_estimado": 30
      },
      {
        "id": "salida_publicacion",
        "type": "salida_publicacion", 
        "model": "gpt-3.5-turbo",
        "temperature": 0.1,
        "max_tokens": 100,
        "prompt": "Prepara metadatos de publicación: scheduling, tags, analytics tracking. Genera reporte de métricas esperadas.",
        "costo_estimado": 0.03,
        "tiempo_estimado": 3
      }
    ],
    "configuracion_general": {
      "ejecutor": "semi-automatico",
      "frecuencia": "diaria", 
      "volumen_esperado": 50,
      "costo_total_ciclo": 1.28,
      "tiempo_total_ciclo": 75
    }
  },
  "common_issues": {
    "modelo_inadecuado": {
      "severity": "alta",
      "description": "Uso de modelo costoso para tarea simple",
      "solution": "Migrar a gpt-4o-mini o gpt-3.5-turbo para tareas básicas",
      "impact_cost": 25
    },
    "prompts_largos": {
      "severity": "media", 
      "description": "Prompts excesivamente largos aumentan costos",
      "solution": "Compresión de prompts y optimización semántica",
      "impact_cost": 15
    },
    "falta_cache": {
      "severity": "alta",
      "description": "Sin sistema de cache para requests similares", 
      "solution": "Implementar Redis cache con TTL inteligente",
      "impact_cost": 30
    },
    "revision_manual": {
      "severity": "critica",
      "description": "Proceso de revisión completamente manual",
      "solution": "Automatizar con checklists y criterios específicos", 
      "impact_time": 50
    }
  },
  "optimization_suggestions": [
    {
      "title": "Migrar validación a gpt-4o-mini",
      "roi": "52%",
      "ahorro_ciclo": "$0.13",
      "dificultad": "Fácil",
      "tiempo_implementacion": "1-2 días"
    },
    {
      "title": "Automatizar revisión final", 
      "roi": "45%",
      "ahorro_ciclo": "22 segundos",
      "dificultad": "Media",
      "tiempo_implementacion": "1 semana"
    },
    {
      "title": "Implementar cache inteligente",
      "roi": "38%", 
      "ahorro_ciclo": "$0.35",
      "dificultad": "Media",
      "tiempo_implementacion": "2 semanas"
    },
    {
      "title": "Optimizar prompts largos",
      "roi": "25%",
      "ahorro_ciclo": "$0.08", 
      "dificultad": "Media",
      "tiempo_implementacion": "3-5 días"
    }
  ]
};

// Variables globales
let currentWorkflow = null;
let nodeScores = [];
let workflowScore = 0;
let issuesFound = [];
let optimizationPriorities = [];

// Elementos DOM
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar manejo de archivos
  initFileUpload();
  
  // Inicializar tabs
  initTabs();
  
  // Inicializar botones de acción
  document.getElementById('load-sample-btn').addEventListener('click', loadSampleWorkflow);
  document.getElementById('export-report-btn').addEventListener('click', exportReport);
  document.getElementById('new-analysis-btn').addEventListener('click', resetAnalysis);
});

// Inicializar upload de archivos
function initFileUpload() {
  const uploadArea = document.getElementById('upload-area');
  const fileInput = document.getElementById('file-input');
  const fileSelectBtn = document.getElementById('file-select-btn');
  
  // Drag and drop
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.add('dragover');
  });
  
  uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('dragover');
  });
  
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  });
  
  // Selección de archivo
  fileSelectBtn.addEventListener('click', () => {
    fileInput.click();
  });
  
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileUpload(e.target.files[0]);
    }
  });
  
  // Clic en el área completa
  uploadArea.addEventListener('click', () => {
    fileInput.click();
  });
}

// Manejar archivo subido
function handleFileUpload(file) {
  const statusEl = document.getElementById('upload-status');
  
  // Verificar tipo de archivo
  if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
    statusEl.textContent = 'Error: Por favor, sube un archivo JSON válido.';
    statusEl.className = 'upload-status error';
    statusEl.style.display = 'block';
    return;
  }
  
  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      const jsonData = JSON.parse(e.target.result);
      
      // Validar estructura básica
      if (!jsonData.workflow_name || !jsonData.nodos || !Array.isArray(jsonData.nodos)) {
        throw new Error('El archivo JSON no tiene la estructura correcta de workflow.');
      }
      
      statusEl.textContent = 'Archivo cargado correctamente. Analizando...';
      statusEl.className = 'upload-status success';
      statusEl.style.display = 'block';
      
      // Procesar el workflow
      processWorkflow(jsonData);
      
    } catch (error) {
      statusEl.textContent = `Error: ${error.message}`;
      statusEl.className = 'upload-status error';
      statusEl.style.display = 'block';
    }
  };
  
  reader.onerror = function() {
    statusEl.textContent = 'Error al leer el archivo.';
    statusEl.className = 'upload-status error';
    statusEl.style.display = 'block';
  };
  
  reader.readAsText(file);
}

// Cargar workflow de ejemplo
function loadSampleWorkflow() {
  processWorkflow(evaluationData.sample_workflow);
}

// Procesar workflow
function processWorkflow(workflow) {
  currentWorkflow = workflow;
  
  // Evaluar workflow
  evaluateWorkflow();
  
  // Mostrar sección de resultados
  document.getElementById('upload-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'block';
  
  // Navegar a la primera tab
  const tabs = document.querySelectorAll('.tab-btn');
  tabs[0].click();
}

// Evaluar workflow
function evaluateWorkflow() {
  const { criteria, scoring_rules } = evaluationData.evaluation_schema;
  
  // Reiniciar variables globales
  nodeScores = [];
  issuesFound = [];
  optimizationPriorities = [];
  
  // Evaluar cada nodo
  currentWorkflow.nodos.forEach(node => {
    const nodeType = node.type;
    const nodeCriteria = criteria[nodeType];
    
    if (!nodeCriteria) {
      // Si no hay criterios, asignar puntaje bajo
      nodeScores.push({
        node: node,
        score: 65,
        issues: [{
          severity: 'alta',
          message: `Tipo de nodo "${nodeType}" no reconocido`
        }],
        status: 'critical'
      });
      return;
    }
    
    // Calcular puntaje base (70-100)
    let score = 70;
    let issues = [];
    
    // Evaluar costo
    if (node.costo_estimado < nodeCriteria.optimal_cost.min) {
      // Demasiado bajo podría indicar calidad insuficiente
      score += 5;
    } else if (node.costo_estimado <= nodeCriteria.optimal_cost.max) {
      // Costo óptimo
      score += 10;
    } else {
      // Costo excesivo
      score -= Math.min(15, (node.costo_estimado - nodeCriteria.optimal_cost.max) * 100);
      issues.push({
        severity: 'alta',
        message: 'Costo excesivo para este tipo de nodo'
      });
    }
    
    // Evaluar tokens
    if (node.max_tokens < nodeCriteria.optimal_tokens.min) {
      // Muy pocos tokens pueden limitar la calidad
      score -= 5;
      issues.push({
        severity: 'media',
        message: 'Tokens insuficientes para resultados óptimos'
      });
    } else if (node.max_tokens <= nodeCriteria.optimal_tokens.max) {
      // Tokens óptimos
      score += 10;
    } else {
      // Exceso de tokens
      score -= Math.min(10, (node.max_tokens - nodeCriteria.optimal_tokens.max) / 100);
      issues.push({
        severity: 'media',
        message: 'Tokens excesivos, aumenta costo innecesariamente'
      });
    }
    
    // Evaluar tiempo
    if (node.tiempo_estimado < nodeCriteria.optimal_time.min) {
      // Muy rápido podría indicar insuficiente procesamiento
      score += 0;
    } else if (node.tiempo_estimado <= nodeCriteria.optimal_time.max) {
      // Tiempo óptimo
      score += 10;
    } else {
      // Tiempo excesivo
      score -= Math.min(10, (node.tiempo_estimado - nodeCriteria.optimal_time.max) * 2);
      issues.push({
        severity: 'media',
        message: 'Tiempo de procesamiento excesivo'
      });
    }
    
    // Evaluar modelo
    if (nodeType === 'entrada_datos' || nodeType === 'salida_publicacion') {
      if (node.model.includes('gpt-4')) {
        score -= 15;
        issues.push({
          severity: 'alta',
          message: 'Modelo demasiado potente para una tarea simple'
        });
      }
    }
    
    // Evaluar temperatura
    if (nodeType === 'entrada_datos' || nodeType === 'validacion_contenido' || nodeType === 'revision_final') {
      if (node.temperature > 0.3) {
        score -= 10;
        issues.push({
          severity: 'alta',
          message: 'Temperatura demasiado alta para tareas de validación/revisión'
        });
      }
    } else if (nodeType === 'generacion_ideas') {
      if (node.temperature < 0.5) {
        score -= 10;
        issues.push({
          severity: 'alta',
          message: 'Temperatura demasiado baja para generación creativa'
        });
      }
    }
    
    // Longitud del prompt
    if (node.prompt && node.prompt.length > 300) {
      score -= Math.min(10, (node.prompt.length - 300) / 100);
      issues.push({
        severity: 'media',
        message: 'Prompt excesivamente largo, optimizar para reducir costos'
      });
    }
    
    // Caso especial: revisión final
    if (nodeType === 'revision_final' && node.tiempo_estimado > 20) {
      issues.push({
        severity: 'critica',
        message: 'Proceso de revisión excesivamente manual, automatizar'
      });
    }
    
    // Asegurar que el score esté entre 0-100
    score = Math.max(0, Math.min(100, Math.round(score)));
    
    // Determinar estado según reglas de scoring
    let status = 'critical';
    for (const [ruleName, rule] of Object.entries(scoring_rules)) {
      if (score >= rule.min) {
        status = ruleName;
      }
    }
    
    // Agregar resultado a la lista
    nodeScores.push({
      node,
      score,
      issues,
      status
    });
    
    // Recopilar issues para análisis global
    issues.forEach(issue => {
      issuesFound.push({
        nodeId: node.id,
        nodeType: node.type,
        severity: issue.severity,
        message: issue.message
      });
    });
  });
  
  // Calcular score global del workflow (promedio ponderado)
  let totalWeight = 0;
  let weightedScore = 0;
  
  nodeScores.forEach(nodeScore => {
    const nodeType = nodeScore.node.type;
    const weight = criteria[nodeType] ? criteria[nodeType].weight : 0.1;
    
    weightedScore += nodeScore.score * weight;
    totalWeight += weight;
  });
  
  workflowScore = Math.round(weightedScore / totalWeight);
  
  // Generar optimizaciones prioritarias
  generateOptimizations();
  
  // Actualizar UI
  updateUI();
}

// Generar optimizaciones basadas en los problemas encontrados
function generateOptimizations() {
  // Usar las optimizaciones de ejemplo para demostración
  optimizationPriorities = evaluationData.optimization_suggestions;
}

// Actualizar UI con los resultados
function updateUI() {
  // Actualizar Resumen Ejecutivo
  updateSummary();
  
  // Actualizar Evaluación por Nodos
  updateNodeEvaluation();
  
  // Actualizar Análisis de Errores
  updateErrorAnalysis();
  
  // Actualizar Optimizaciones
  updateOptimizations();
  
  // Actualizar Checklist
  updateChecklist();
}

// Actualizar resumen ejecutivo
function updateSummary() {
  // Score global
  document.getElementById('global-score').textContent = workflowScore;
  
  // Estado global
  const { scoring_rules } = evaluationData.evaluation_schema;
  let globalStatus = 'critical';
  for (const [ruleName, rule] of Object.entries(scoring_rules)) {
    if (workflowScore >= rule.min) {
      globalStatus = ruleName;
      document.getElementById('global-status').textContent = rule.message;
      document.getElementById('global-score').style.color = rule.color;
      break;
    }
  }
  
  // Costo por ciclo
  const totalCost = currentWorkflow.configuracion_general.costo_total_ciclo || 
                   currentWorkflow.nodos.reduce((sum, node) => sum + (node.costo_estimado || 0), 0);
  document.getElementById('cycle-cost').textContent = `$${totalCost.toFixed(2)}`;
  
  // Tiempo total
  const totalTime = currentWorkflow.configuracion_general.tiempo_total_ciclo || 
                    currentWorkflow.nodos.reduce((sum, node) => sum + (node.tiempo_estimado || 0), 0);
  document.getElementById('total-time').textContent = `${totalTime} min`;
  
  // Errores críticos
  const criticalErrors = issuesFound.filter(issue => issue.severity === 'critica').length;
  document.getElementById('critical-errors').textContent = criticalErrors;
  
  // Gráfico de scores por nodo
  const scoreChartEl = document.getElementById('score-chart');
  scoreChartEl.innerHTML = '';
  
  nodeScores.forEach(nodeScore => {
    const barEl = document.createElement('div');
    barEl.className = 'score-bar';
    
    const labelEl = document.createElement('div');
    labelEl.className = 'score-bar__label';
    labelEl.textContent = getNodeTitle(nodeScore.node.type);
    
    const progressEl = document.createElement('div');
    progressEl.className = 'score-bar__progress';
    
    const fillEl = document.createElement('div');
    fillEl.className = `score-bar__fill score-${nodeScore.status}`;
    fillEl.style.width = `${nodeScore.score}%`;
    
    const valueEl = document.createElement('div');
    valueEl.className = 'score-bar__value';
    valueEl.textContent = nodeScore.score;
    
    progressEl.appendChild(fillEl);
    progressEl.appendChild(valueEl);
    barEl.appendChild(labelEl);
    barEl.appendChild(progressEl);
    
    scoreChartEl.appendChild(barEl);
  });
}

// Actualizar evaluación por nodos
function updateNodeEvaluation() {
  const nodeEvaluationEl = document.getElementById('node-evaluation');
  nodeEvaluationEl.innerHTML = '';
  
  nodeScores.forEach(nodeScore => {
    const { node, score, issues, status } = nodeScore;
    
    const nodeCard = document.createElement('div');
    nodeCard.className = `card node-card ${status}`;
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    
    // Header con título y score
    const nodeHeader = document.createElement('div');
    nodeHeader.className = 'node-header';
    
    const nodeTitle = document.createElement('h3');
    nodeTitle.className = 'node-title';
    nodeTitle.textContent = getNodeTitle(node.type);
    
    const nodeScoreEl = document.createElement('div');
    nodeScoreEl.className = `node-score score-${status}`;
    nodeScoreEl.textContent = score;
    
    nodeHeader.appendChild(nodeTitle);
    nodeHeader.appendChild(nodeScoreEl);
    
    // Métricas del nodo
    const nodeMetrics = document.createElement('div');
    nodeMetrics.className = 'node-metrics';
    
    // Métrica: Modelo
    const modelMetric = createMetric('Modelo', node.model);
    nodeMetrics.appendChild(modelMetric);
    
    // Métrica: Temperatura
    const tempMetric = createMetric('Temperatura', node.temperature);
    nodeMetrics.appendChild(tempMetric);
    
    // Métrica: Max Tokens
    const tokensMetric = createMetric('Max Tokens', node.max_tokens);
    nodeMetrics.appendChild(tokensMetric);
    
    // Métrica: Costo
    const costMetric = createMetric('Costo', `$${node.costo_estimado}`);
    nodeMetrics.appendChild(costMetric);
    
    // Métrica: Tiempo
    const timeMetric = createMetric('Tiempo', `${node.tiempo_estimado} min`);
    nodeMetrics.appendChild(timeMetric);
    
    // Problemas encontrados
    let nodeIssues = null;
    if (issues.length > 0) {
      nodeIssues = document.createElement('div');
      nodeIssues.className = 'node-issues';
      
      const issuesTitle = document.createElement('h4');
      issuesTitle.textContent = 'Problemas Identificados';
      nodeIssues.appendChild(issuesTitle);
      
      const issuesList = document.createElement('div');
      issues.forEach(issue => {
        const issueItem = document.createElement('div');
        issueItem.className = 'issue-item';
        
        const iconClass = issue.severity === 'critica' ? 'critical' : 
                          issue.severity === 'alta' ? 'high' : 'medium';
        
        const issueIcon = document.createElement('span');
        issueIcon.className = `issue-icon ${iconClass}`;
        issueIcon.textContent = '⚠️';
        
        const issueText = document.createElement('div');
        issueText.textContent = issue.message;
        
        issueItem.appendChild(issueIcon);
        issueItem.appendChild(issueText);
        issuesList.appendChild(issueItem);
      });
      
      nodeIssues.appendChild(issuesList);
    }
    
    // Agregar todo al card
    cardBody.appendChild(nodeHeader);
    cardBody.appendChild(nodeMetrics);
    if (nodeIssues) cardBody.appendChild(nodeIssues);
    nodeCard.appendChild(cardBody);
    
    nodeEvaluationEl.appendChild(nodeCard);
  });
}

// Actualizar análisis de errores
function updateErrorAnalysis() {
  const errorAnalysisEl = document.getElementById('error-analysis');
  errorAnalysisEl.innerHTML = '';
  
  // Filtrar y ordenar errores por severidad
  const sortedIssues = [...issuesFound].sort((a, b) => {
    const severityOrder = { 'critica': 0, 'alta': 1, 'media': 2, 'baja': 3 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });
  
  if (sortedIssues.length === 0) {
    const noIssuesMsg = document.createElement('div');
    noIssuesMsg.className = 'card';
    noIssuesMsg.innerHTML = `
      <div class="card__body">
        <p>No se encontraron problemas en el workflow. ¡Excelente trabajo!</p>
      </div>
    `;
    errorAnalysisEl.appendChild(noIssuesMsg);
    return;
  }
  
  // Crear tarjetas para cada issue
  sortedIssues.forEach((issue, index) => {
    // Obtener información del issue común correspondiente
    let commonIssue = null;
    for (const [key, value] of Object.entries(evaluationData.common_issues)) {
      if (issue.message.toLowerCase().includes(key.toLowerCase()) || 
          value.description.toLowerCase().includes(issue.message.toLowerCase())) {
        commonIssue = { ...value, id: key };
        break;
      }
    }
    
    const errorCard = document.createElement('div');
    errorCard.className = 'card error-card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    
    // Header
    const errorHeader = document.createElement('div');
    errorHeader.className = 'error-header';
    
    const errorTitle = document.createElement('h3');
    errorTitle.className = 'error-title';
    errorTitle.textContent = `Problema #${index + 1}: ${issue.message}`;
    
    const severityBadge = document.createElement('span');
    severityBadge.className = `severity-badge severity-${issue.severity}`;
    severityBadge.textContent = issue.severity.toUpperCase();
    
    errorHeader.appendChild(errorTitle);
    errorHeader.appendChild(severityBadge);
    
    // Impacto
    const errorImpact = document.createElement('div');
    errorImpact.className = 'error-impact';
    
    let impactText = `Afecta al nodo: ${getNodeTitle(issue.nodeType)} (${issue.nodeId})`;
    if (commonIssue) {
      if (commonIssue.impact_cost) {
        impactText += ` • Impacto en costo: ${commonIssue.impact_cost}%`;
      }
      if (commonIssue.impact_time) {
        impactText += ` • Impacto en tiempo: ${commonIssue.impact_time}%`;
      }
    }
    
    errorImpact.textContent = impactText;
    
    // Solución
    let errorSolution = null;
    if (commonIssue && commonIssue.solution) {
      errorSolution = document.createElement('div');
      errorSolution.className = 'error-solution';
      
      const solutionTitle = document.createElement('strong');
      solutionTitle.textContent = 'Solución recomendada: ';
      
      const solutionText = document.createElement('span');
      solutionText.textContent = commonIssue.solution;
      
      errorSolution.appendChild(solutionTitle);
      errorSolution.appendChild(solutionText);
    }
    
    // Agregar todo al card
    cardBody.appendChild(errorHeader);
    cardBody.appendChild(errorImpact);
    if (errorSolution) cardBody.appendChild(errorSolution);
    errorCard.appendChild(cardBody);
    
    errorAnalysisEl.appendChild(errorCard);
  });
}

// Actualizar optimizaciones
function updateOptimizations() {
  const optimizationPanelEl = document.getElementById('optimization-panel');
  optimizationPanelEl.innerHTML = '';
  
  optimizationPriorities.forEach((optimization, index) => {
    const optimizationCard = document.createElement('div');
    optimizationCard.className = 'card optimization-card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    
    // Header
    const optimizationHeader = document.createElement('div');
    optimizationHeader.className = 'optimization-header';
    
    const optimizationTitle = document.createElement('h3');
    optimizationTitle.className = 'optimization-title';
    optimizationTitle.textContent = `${index + 1}. ${optimization.title}`;
    
    const roiBadge = document.createElement('span');
    roiBadge.className = 'roi-badge';
    roiBadge.textContent = `ROI: ${optimization.roi}`;
    
    optimizationHeader.appendChild(optimizationTitle);
    optimizationHeader.appendChild(roiBadge);
    
    // Métricas
    const optimizationMetrics = document.createElement('div');
    optimizationMetrics.className = 'optimization-metrics';
    
    // Métrica: Ahorro
    const ahorroMetric = document.createElement('div');
    ahorroMetric.className = 'optimization-metric';
    
    const ahorroValue = document.createElement('div');
    ahorroValue.className = 'optimization-metric__value';
    ahorroValue.textContent = optimization.ahorro_ciclo;
    
    const ahorroLabel = document.createElement('div');
    ahorroLabel.className = 'optimization-metric__label';
    ahorroLabel.textContent = 'Ahorro por ciclo';
    
    ahorroMetric.appendChild(ahorroValue);
    ahorroMetric.appendChild(ahorroLabel);
    
    // Métrica: Dificultad
    const dificultadMetric = document.createElement('div');
    dificultadMetric.className = 'optimization-metric';
    
    const dificultadValue = document.createElement('div');
    dificultadValue.className = `difficulty-badge difficulty-${optimization.dificultad.toLowerCase()}`;
    dificultadValue.textContent = optimization.dificultad;
    
    const dificultadLabel = document.createElement('div');
    dificultadLabel.className = 'optimization-metric__label';
    dificultadLabel.textContent = 'Dificultad';
    
    dificultadMetric.appendChild(dificultadValue);
    dificultadMetric.appendChild(dificultadLabel);
    
    // Métrica: Tiempo
    const tiempoMetric = document.createElement('div');
    tiempoMetric.className = 'optimization-metric';
    
    const tiempoValue = document.createElement('div');
    tiempoValue.className = 'optimization-metric__value';
    tiempoValue.textContent = optimization.tiempo_implementacion;
    
    const tiempoLabel = document.createElement('div');
    tiempoLabel.className = 'optimization-metric__label';
    tiempoLabel.textContent = 'Tiempo de implementación';
    
    tiempoMetric.appendChild(tiempoValue);
    tiempoMetric.appendChild(tiempoLabel);
    
    optimizationMetrics.appendChild(ahorroMetric);
    optimizationMetrics.appendChild(dificultadMetric);
    optimizationMetrics.appendChild(tiempoMetric);
    
    // Agregar todo al card
    cardBody.appendChild(optimizationHeader);
    cardBody.appendChild(optimizationMetrics);
    optimizationCard.appendChild(cardBody);
    
    optimizationPanelEl.appendChild(optimizationCard);
  });
}

// Actualizar checklist
function updateChecklist() {
  const checklistContainerEl = document.getElementById('checklist-container');
  checklistContainerEl.innerHTML = '';
  
  // Crear secciones de checklist
  const sections = [
    {
      title: 'Optimizaciones Inmediatas',
      subtitle: '0-2 semanas',
      items: []
    },
    {
      title: 'Mejoras de Mediano Plazo',
      subtitle: '1-2 meses',
      items: []
    },
    {
      title: 'Optimizaciones Avanzadas',
      subtitle: '3+ meses',
      items: []
    }
  ];
  
  // Distribuir optimizaciones en secciones según dificultad
  optimizationPriorities.forEach(opt => {
    const checklistItem = {
      task: opt.title,
      impact: `ROI estimado: ${opt.roi}`,
      resources: `Tiempo: ${opt.tiempo_implementacion}, Dificultad: ${opt.dificultad}`
    };
    
    if (opt.dificultad === 'Fácil') {
      sections[0].items.push(checklistItem);
    } else if (opt.dificultad === 'Media') {
      sections[1].items.push(checklistItem);
    } else {
      sections[2].items.push(checklistItem);
    }
  });
  
  // Agregar elementos basados en los problemas encontrados
  issuesFound.forEach(issue => {
    const nodeTitle = getNodeTitle(issue.nodeType);
    
    if (issue.severity === 'critica' || issue.severity === 'alta') {
      sections[0].items.push({
        task: `Resolver en ${nodeTitle}: ${issue.message}`,
        impact: 'Impacto: Alto',
        resources: 'Prioridad: Urgente'
      });
    } else {
      sections[1].items.push({
        task: `Mejorar en ${nodeTitle}: ${issue.message}`,
        impact: 'Impacto: Medio',
        resources: 'Prioridad: Normal'
      });
    }
  });
  
  // Crear secciones en el DOM
  sections.forEach(section => {
    if (section.items.length === 0) return; // Omitir secciones vacías
    
    const sectionEl = document.createElement('div');
    sectionEl.className = 'checklist-section';
    
    const headerEl = document.createElement('div');
    headerEl.className = 'checklist-header';
    
    const titleEl = document.createElement('h3');
    titleEl.className = 'checklist-title';
    titleEl.textContent = section.title;
    
    const subtitleEl = document.createElement('div');
    subtitleEl.className = 'checklist-subtitle';
    subtitleEl.textContent = section.subtitle;
    
    headerEl.appendChild(titleEl);
    headerEl.appendChild(subtitleEl);
    
    const itemsEl = document.createElement('div');
    itemsEl.className = 'checklist-items';
    
    section.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'checklist-item';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checklist-checkbox';
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          itemEl.classList.add('completed');
        } else {
          itemEl.classList.remove('completed');
        }
      });
      
      const contentEl = document.createElement('div');
      contentEl.className = 'checklist-content';
      
      const taskEl = document.createElement('div');
      taskEl.className = 'checklist-task';
      taskEl.textContent = item.task;
      
      const detailsEl = document.createElement('div');
      detailsEl.className = 'checklist-details';
      
      const impactEl = document.createElement('div');
      impactEl.textContent = item.impact;
      
      const resourcesEl = document.createElement('div');
      resourcesEl.textContent = item.resources;
      
      detailsEl.appendChild(impactEl);
      detailsEl.appendChild(resourcesEl);
      
      contentEl.appendChild(taskEl);
      contentEl.appendChild(detailsEl);
      
      itemEl.appendChild(checkbox);
      itemEl.appendChild(contentEl);
      
      itemsEl.appendChild(itemEl);
    });
    
    sectionEl.appendChild(headerEl);
    sectionEl.appendChild(itemsEl);
    
    checklistContainerEl.appendChild(sectionEl);
  });
}

// Inicializar tabs
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Desactivar todos los tabs
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      
      // Activar tab seleccionado
      btn.classList.add('active');
      const tabId = btn.dataset.tab;
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Exportar reporte
function exportReport() {
  alert('Reporte generado. El archivo se descargará automáticamente.');
  
  // En una implementación real, esto generaría un PDF o JSON para descargar
}

// Reiniciar análisis
function resetAnalysis() {
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('upload-section').style.display = 'block';
  document.getElementById('upload-status').style.display = 'none';
  
  // Limpiar estado
  currentWorkflow = null;
  nodeScores = [];
  workflowScore = 0;
  issuesFound = [];
  optimizationPriorities = [];
}

// Obtener título legible para tipos de nodos
function getNodeTitle(nodeType) {
  const titles = {
    'entrada_datos': 'Entrada de Datos',
    'generacion_ideas': 'Generación de Ideas',
    'creacion_contenido': 'Creación de Contenido',
    'validacion_contenido': 'Validación de Contenido',
    'formateo_plataformas': 'Formateo para Plataformas',
    'revision_final': 'Revisión Final',
    'salida_publicacion': 'Salida y Publicación'
  };
  
  return titles[nodeType] || nodeType;
}

// Crear elemento de métrica para tarjetas de nodos
function createMetric(label, value) {
  const metricEl = document.createElement('div');
  metricEl.className = 'node-metric';
  
  const valueEl = document.createElement('div');
  valueEl.className = 'node-metric__value';
  valueEl.textContent = value;
  
  const labelEl = document.createElement('div');
  labelEl.className = 'node-metric__label';
  labelEl.textContent = label;
  
  metricEl.appendChild(valueEl);
  metricEl.appendChild(labelEl);
  
  return metricEl;
}