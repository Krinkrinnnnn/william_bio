"use client";

import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Terminal,
  School,
  WorkHistory,
  AutoAwesome,
  Memory,
  Api,
  Videocam,
  DirectionsCar,
  Pool,
  ChildCare,
  Spa,
  SentimentSatisfied,
  MonitorHeart,
  ChevronRight,
  EmojiEvents,
  Verified,
  Language,
  Code,
} from "@mui/icons-material";
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  TypeWriter,
  AnimatedSkillBar,
  FloatingElement,
  AnimatedOrb,
  ScaleIn,
} from "@/components/animations";

const skills = [
  { name: "Python (PyTorch / TensorFlow)", level: 95 },
  { name: "LLM / RAG / AI Agents", level: 90 },
  { name: "DevOps (CI/CD, Docker, Cloud)", level: 85 },
  { name: "Computer Vision (YOLO, OpenCV)", level: 92 },
  { name: "C / C++ (TensorRT)", level: 85 },
  { name: "NLP / Transformers (BERT, T5)", level: 82 },
  { name: "JavaScript / React", level: 80 },
  { name: "Cloud & Back-End (AWS, Node.js)", level: 78 },
];

const techStack = [
  "Python",
  "C",
  "C++",
  "Java",
  "PyTorch",
  "TensorFlow",
  "TensorRT",
  "OpenCV",
  "LangChain",
  "Langflow",
  "n8n",
  "Docker",
  "CI/CD",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "AWS",
  "Node.js",
  "SQL",
  "Linux",
  "Git",
];

const workExperience = [
  {
    title: "LLM Developer",
    tech: "LLM / DevOps / RAG / LangChain / Next.js",
    points: [
      "Building an AI-powered education platform with LLM-driven coursework generation, rubric extraction, and automated grading with real-time progress (Socket.io)",
      "Designing and implementing RAG-based knowledge bases (LightRAG) with document upload, graph compute, and query APIs; tracking token/embedding usage and operations in Supabase",
      "Developing course-assistant chat, recommendation-letter generation, and Moodle integration for course/assignment sync and grade submission",
      "Maintaining CI/CD with GitLab CI (Kaniko), container registry (Harbor), and GitOps deployments (Kubernetes, ArgoCD) for production LLM services",
    ],
  },
  {
    title: "AI Software Developer",
    tech: "Python (PyTorch) / C++ (TensorRT)",
    points: [
      "Built real-time computer vision system pipelines through GitHub workflows for efficient deployment",
      "Implemented solutions, designed different algorithms and deployed CNN models for multiple projects",
      "Optimized AI models for NVIDIA Jetson IoT edge devices (Orin NANO, AGX Orin) for efficient inference",
    ],
  },
  {
    title: "Software Programmer",
    tech: "Python (PyTorch) / JavaScript (React)",
    points: [
      "Provided solutions and deployed CNNs for an indoor farming project",
      "Visualized ML results and data in a web application using React",
      "Conducted training and soldering for ESP-IDF platform (I2C/UART interface connections)",
    ],
  },
  {
    title: "Officer Assistant",
    tech: "Administration / Database Systems",
    points: [
      "Managed executive and managerial administrative support for operations",
      "Administered database systems and maintained accurate digital records",
      "Resolved inquiries and provided customer service through multiple communication channels",
    ],
  },
];

const projects = [
  {
    icon: <School />,
    title: "AI-Powered Education Platform",
    tech: "Next.js / LangChain & LangGraph / OpenAI & Tavily / Supabase / Docker & K8s",
    points: [
      "Full-stack education platform: LLM-driven coursework generation, AI rubric extraction, and automated grading with real-time progress; course-assistant chat and RAG knowledge base (LightRAG) per classroom",
      "Backend APIs for knowledge base (create, upload, query, graph compute), grading sessions, coursework templates, and Moodle integration (courses, assignments, grade sync)",
      "Recommendation letter tool with LLM-generated attributes and PDF export; dashboard charts (ECharts), i18n (react-intl), PWA, MUI + Tailwind UI",
      "DevOps: GitLab CI/CD (Kaniko build, Harbor registry), multi-stage Dockerfile, Kubernetes manifests; GitOps via ArgoCD for dev/stage/prod environments",
    ],
  },
  {
    icon: <DirectionsCar />,
    title: "Car Detection & Illegal Parking System",
    tech: "Python (PyTorch, OpenCV) / C++ (TensorRT)",
    points: [
      "Built a YOLOv9 system for real-time vehicle detection, tracking, and multi-class identification, combined with HSV color analysis for motion detection and automatic parking violation enforcement",
      "Added smart parking timer with frame-based timing (25 FPS), IOU checks, and two-step violation detection for accurate results",
      "Improved reliability with overlap removal, occlusion handling (up to 15s), stable ID tracking, and error recovery",
    ],
  },
  {
    icon: <Videocam />,
    title: "AI Fight and Fall Detection System",
    tech: "Python (PyTorch, OpenCV) / C++ (TensorRT)",
    points: [
      "Built a YOLOv7 model to detect behaviors in people with mental disabilities in real time, improving safety and care while protecting privacy",
      "Created an auto-labeller tool to speed up data labeling and improve model training",
      "Used TensorRT to speed up the model on GPU, achieving high FPS while handling 40+ cameras per site",
    ],
  },
  {
    icon: <ChildCare />,
    title: "Child Safety & Abuse Prevention System",
    tech: "Python (PyTorch, OpenCV) / TensorRT",
    points: [
      "Built a real-time multi-model system using YOLOv7 + TSM to instantly detect adult-to-child violence and child self-abnormal behaviors for immediate staff intervention",
      "Created a fully automated annotation & dataset pipeline with smart bounding-box adjustments, cutting manual labeling time by over 90%",
      "Converted TSM to TensorRT engine and fused with YOLOv7 for 10+ FPS performance, supporting 40+ cameras on a single GPU with sub-second alerts",
    ],
  },
  {
    icon: <Pool />,
    title: "AI Drowning Detection System",
    tech: "Python (PyTorch, OpenCV) / C++ (TensorRT)",
    points: [
      "Developed AI swimmer monitoring system to detect drowning risks through video analysis for pool safety",
      "Utilized computer vision techniques to track swimmers\u2019 coordinates during drowning incidents, enabling real-time location tracking on a smartwatch",
    ],
  },
  {
    icon: <Spa />,
    title: "ML Plant Recognition for Growth Measurement",
    tech: "Python (PyTorch, Scikit-learn) / JavaScript (React)",
    points: [
      "Developed a supervised learning model for precise plant feature capture through image segmentation, focusing on stems and leaves",
      "Designed algorithms and implemented Unet3+ models based on CNN architecture",
    ],
  },
  {
    icon: <SentimentSatisfied />,
    title: "Fine-Tuning PLMs for Sentiment Analysis",
    tech: "Python (PyTorch)",
    points: [
      "Fine-tuned BERT and variants (DistilBERT, RoBERTa, BART, T5) on IMDB dataset for sentiment analysis (positive/negative classification)",
      "Experienced in data tokenization, fine-tuning PLMs, and handling NLP tasks with PyTorch",
      "Explored open-source models and techniques similar to RAG for context-aware predictions",
    ],
  },
  {
    icon: <MonitorHeart />,
    title: "Elderly Health Telemedicine System",
    tech: "C++ / SQL",
    points: [
      "Built a remote monitoring system for elderly health using sensors (heart rate, BP, SpO2, temp, ECG) via I2C/UART",
      "Integrated OLED/e-paper/LED displays and RFID for secure patient records",
    ],
  },
];

const stats = [
  { value: 8, suffix: "+", label: "Projects Delivered" },
  { value: 90, suffix: "%", label: "Label Time Saved" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

function FloatingProfileIcon() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Tooltip title="Back to top" placement="left" arrow>
      <Box
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1200,
          cursor: "pointer",
          animation: "floatBob 3s ease-in-out infinite",
          transition: "opacity 0.4s ease, transform 0.3s ease",
          opacity: 1,
          "@keyframes floatBob": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
          "&:hover": {
            transform: "scale(1.12)",
            "& .float-ring": {
              transform: "scale(1.3)",
              opacity: 0.5,
            },
          },
        }}
      >
        <Box
          className="float-ring"
          sx={{
            position: "absolute",
            inset: -6,
            borderRadius: "50%",
            border: "2px solid",
            borderColor: "primary.light",
            opacity: 0.3,
            transition: "all 0.3s ease",
          }}
        />
        <Avatar
          src="/profile.png"
          alt="William Chung"
          sx={{
            width: 56,
            height: 56,
            border: "3px solid #fff",
            boxShadow: "0 8px 32px rgba(0,84,97,0.35)",
          }}
        />
      </Box>
    </Tooltip>
  );
}

export default function Home() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <FloatingProfileIcon />
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #005461 0%, #018790 50%, #00B7B5 100%)",
          color: "#fff",
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AnimatedOrb size={500} top="-30%" left="70%" delay={0} />
        <AnimatedOrb
          size={350}
          top="60%"
          left="-10%"
          delay={2}
          color="rgba(255,255,255,0.03)"
        />
        <AnimatedOrb
          size={200}
          top="20%"
          left="40%"
          delay={4}
          color="rgba(0,183,181,0.08)"
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
              <FloatingElement amplitude={8} duration={4}>
                <ScaleIn>
                  <Avatar
                    src="/profile.png"
                    alt="William Chung"
                    sx={{
                      width: 180,
                      height: 180,
                      mx: "auto",
                      border: "4px solid rgba(255,255,255,0.3)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    }}
                  />
                </ScaleIn>
              </FloatingElement>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeInSection delay={0.1} direction="right" distance={30}>
                <Chip
                  icon={
                    <AutoAwesome sx={{ color: "#00B7B5 !important" }} />
                  }
                  label="AI Software Developer"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    mb: 2,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    backdropFilter: "blur(10px)",
                  }}
                />
              </FadeInSection>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                  lineHeight: 1.15,
                  mb: 2,
                }}
              >
                <TypeWriter
                  text="Hi, I'm William Chung"
                  speed={55}
                  delay={300}
                />
              </Typography>
              <FadeInSection delay={0.8} direction="up" distance={20}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    opacity: 0.9,
                    lineHeight: 1.6,
                    maxWidth: 560,
                    fontSize: { xs: "1rem", md: "1.15rem" },
                  }}
                >
                  Currently working as an LLM Developer focused on DevOps and
                  Large Language Model applications. I build real-time AI
                  systems — from computer vision pipelines to LLM-powered
                  products — and deploy them on edge devices and the cloud.
                  <br />
                  <br />
                  Email me to get my personal contact details and resume!
                </Typography>
              </FadeInSection>
              <FadeInSection delay={1.2} direction="up" distance={20}>
                <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    startIcon={<Email />}
                    href="mailto:williamkrin0811@gmail.com"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.3)",
                        transform: "scale(1.05)",
                      },
                      backdropFilter: "blur(10px)",
                      px: 3,
                      transition: "all 0.2s ease",
                    }}
                  >
                    Contact Me
                  </Button>
                  <IconButton
                    href="https://linkedin.com/in/william-chung-91a08a253/"
                    target="_blank"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.1)",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.2)",
                        transform: "scale(1.15)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    href="https://github.com/Krinkrinnnnn"
                    target="_blank"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.1)",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.2)",
                        transform: "scale(1.15)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    <GitHub />
                  </IconButton>
                </Stack>
              </FadeInSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Container maxWidth="lg" sx={{ mt: 1.5, position: "relative", zIndex: 2 }}>
        <FadeInSection delay={0.2}>
          <Paper
            elevation={0}
            sx={{
              py: 3,
              px: { xs: 2, md: 5 },
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              background:
                "linear-gradient(135deg, rgba(0,84,97,0.04), rgba(0,183,181,0.06))",
            }}
          >
            <Grid container spacing={2}>
              {stats.map((stat) => (
                <Grid size={{ xs: 6, md: 4 }} key={stat.label}>
                  <Stack alignItems="center">
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        background:
                          "linear-gradient(135deg, #005461, #00B7B5)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                    >
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        duration={1.5}
                      />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={500}
                      textAlign="center"
                    >
                      {stat.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </FadeInSection>
      </Container>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ mt: 6, position: "relative", zIndex: 1 }}>
        <FadeInSection>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 7 }}>
                <FadeInSection delay={0.1} direction="left">
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Terminal sx={{ color: "primary.main" }} />
                    <Typography variant="h5" color="primary.dark">
                      About Me
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.85,
                      color: "text.secondary",
                      mb: 2,
                    }}
                  >
                    I&apos;m an AI Developer currently working in an LLM
                    development role with a focus on DevOps and Large Language
                    Models. I build RAG pipelines, design agentic AI
                    workflows, and manage the infrastructure to deploy them at
                    scale. Previously, I specialized in real-time computer
                    vision — designing and deploying CNN models (YOLOv7/v9)
                    optimized for edge devices like NVIDIA Jetson (Orin NANO,
                    AGX Orin) using TensorRT.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.85, color: "text.secondary" }}
                  >
                    Beyond computer vision, I have experience in NLP
                    (fine-tuning BERT variants, RAG techniques), full-stack
                    development with React and Node.js, and building
                    end-to-end ML pipelines. I also hold an AWS Certified
                    Cloud Practitioner certification and enjoy working at the
                    intersection of AI research and practical engineering.
                  </Typography>
                </FadeInSection>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <StaggerContainer staggerDelay={0.12}>
                  {[
                    {
                      icon: <School fontSize="small" />,
                      color: "primary.light",
                      label: "Education",
                      value: "BEng Computer & Data Engineering",
                      sub: "City University of Hong Kong \u2014 Upper Second Class Honours",
                    },
                    {
                      icon: <Verified fontSize="small" />,
                      color: "primary.main",
                      label: "Certification",
                      value: "AWS Certified Cloud Practitioner",
                    },
                    {
                      icon: <Language fontSize="small" />,
                      color: "primary.dark",
                      label: "Languages",
                      value: "Cantonese \u00b7 English \u00b7 Mandarin",
                    },
                    {
                      icon: <EmojiEvents fontSize="small" />,
                      color: "#00B7B5",
                      label: "Achievement",
                      value:
                        "Hackathon 1st Place \u2014 GPT-powered Trip Advisor on Telegram",
                    },
                  ].map((item) => (
                    <StaggerItem key={item.label}>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: 2.5 }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 2,
                            bgcolor: item.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            flexShrink: 0,
                            transition: "transform 0.2s ease",
                            "&:hover": {
                              transform: "scale(1.1) rotate(5deg)",
                            },
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {item.label}
                          </Typography>
                          <Typography variant="body1" fontWeight={600}>
                            {item.value}
                          </Typography>
                          {item.sub && (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              {item.sub}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </Grid>
            </Grid>
          </Paper>
        </FadeInSection>
      </Container>

      {/* Work Experience Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <FadeInSection>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 1 }}
          >
            <WorkHistory sx={{ color: "primary.main" }} />
            <Typography variant="h4" fontWeight={700} textAlign="center">
              Work Experience
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 5, maxWidth: 600, mx: "auto" }}
          >
            Roles where I delivered AI solutions, software products, and
            operational support.
          </Typography>
        </FadeInSection>
        <Grid container spacing={3}>
          {workExperience.map((job, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={job.title}>
              <FadeInSection delay={i * 0.1} direction="up">
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    "&:hover": {
                      borderColor: "primary.light",
                      transform: "translateY(-6px)",
                      boxShadow: "0 16px 48px rgba(1,135,144,0.15)",
                    },
                    "&:hover .work-card-details": {
                      opacity: 1,
                      maxHeight: "800px",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                      {job.title}
                    </Typography>
                    <Chip
                      label={job.tech}
                      size="small"
                      sx={{
                        bgcolor: "#e8f5f4",
                        color: "primary.dark",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        mb: 2,
                      }}
                    />
                    <Box
                      className="work-card-details"
                      sx={{
                        opacity: 0,
                        maxHeight: 0,
                        overflow: "hidden",
                        transition:
                          "opacity 0.3s ease, max-height 0.4s ease-out",
                        "@media (hover: none)": {
                          opacity: 1,
                          maxHeight: "800px",
                        },
                      }}
                    >
                      <List dense disablePadding>
                        {job.points.map((point) => (
                          <ListItem
                            key={point}
                            disableGutters
                            sx={{ alignItems: "flex-start", py: 0.4 }}
                          >
                            <ListItemIcon sx={{ minWidth: 24, mt: 0.8 }}>
                              <ChevronRight
                                sx={{
                                  fontSize: 16,
                                  color: "primary.light",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={point}
                              primaryTypographyProps={{
                                variant: "body2",
                                color: "text.secondary",
                                sx: { lineHeight: 1.6 },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </CardContent>
                </Card>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Projects Section */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <FadeInSection>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              sx={{ mb: 1 }}
            >
              <Memory sx={{ color: "primary.main" }} />
              <Typography variant="h4" fontWeight={700} textAlign="center">
                Projects
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ mb: 5, maxWidth: 650, mx: "auto" }}
            >
              End-to-end AI systems I&apos;ve designed, trained, and deployed
              — from computer vision to NLP and IoT.
            </Typography>
          </FadeInSection>
          <Grid container spacing={3}>
            {projects.map((project, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.title}>
                <FadeInSection
                  delay={i * 0.08}
                  direction={i % 2 === 0 ? "left" : "right"}
                  distance={30}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.3s ease",
                      cursor: "default",
                      "&:hover": {
                        borderColor: "primary.light",
                        transform: "translateY(-6px)",
                        boxShadow: "0 16px 48px rgba(1,135,144,0.15)",
                      },
                      "&:hover .project-card-details": {
                        opacity: 1,
                        maxHeight: "800px",
                      },
                      "&:hover .project-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: 2 }}
                      >
                        <Box
                          className="project-icon"
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 3,
                            background:
                              "linear-gradient(135deg, #005461, #018790)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            flexShrink: 0,
                            transition: "transform 0.3s ease",
                          }}
                        >
                          {project.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{ fontSize: "1rem", lineHeight: 1.3 }}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="primary.main"
                            fontWeight={500}
                          >
                            {project.tech}
                          </Typography>
                        </Box>
                      </Stack>
                      <Box
                        className="project-card-details"
                        sx={{
                          opacity: 0,
                          maxHeight: 0,
                          overflow: "hidden",
                          transition:
                            "opacity 0.3s ease, max-height 0.4s ease-out",
                          "@media (hover: none)": {
                            opacity: 1,
                            maxHeight: "800px",
                          },
                        }}
                      >
                        <List dense disablePadding>
                          {project.points.map((point) => (
                            <ListItem
                              key={point}
                              disableGutters
                              sx={{ alignItems: "flex-start", py: 0.3 }}
                            >
                              <ListItemIcon sx={{ minWidth: 24, mt: 0.8 }}>
                                <ChevronRight
                                  sx={{
                                    fontSize: 16,
                                    color: "primary.light",
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={point}
                                primaryTypographyProps={{
                                  variant: "body2",
                                  color: "text.secondary",
                                  sx: { lineHeight: 1.6 },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeInSection direction="left">
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Api sx={{ color: "primary.main" }} />
                <Typography variant="h4" fontWeight={700}>
                  Skills
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Core competencies and proficiency levels
              </Typography>
            </FadeInSection>
            <Stack spacing={2.5}>
              {skills.map((skill, i) => (
                <FadeInSection key={skill.name} delay={i * 0.06}>
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ mb: 0.5 }}
                    >
                      <Typography variant="body2" fontWeight={600}>
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        {skill.level}%
                      </Typography>
                    </Stack>
                    <AnimatedSkillBar value={skill.level} delay={i * 0.06} />
                  </Box>
                </FadeInSection>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeInSection direction="right">
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Code sx={{ color: "primary.main" }} />
                <Typography variant="h4" fontWeight={700}>
                  Tech Stack
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Technologies and tools I work with
              </Typography>
            </FadeInSection>
            <StaggerContainer staggerDelay={0.04}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {techStack.map((tech) => (
                  <StaggerItem key={tech}>
                    <Chip
                      label={tech}
                      sx={{
                        bgcolor: "#e8f5f4",
                        color: "primary.dark",
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        py: 2.5,
                        px: 0.5,
                        transition: "all 0.25s ease",
                        cursor: "default",
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "#fff",
                          transform: "scale(1.08) translateY(-2px)",
                          boxShadow: "0 4px 12px rgba(1,135,144,0.25)",
                        },
                      }}
                    />
                  </StaggerItem>
                ))}
              </Box>
            </StaggerContainer>

            <FadeInSection delay={0.3}>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Platforms &amp; Tools
              </Typography>
              <Stack spacing={1.5}>
                {[
                  "NVIDIA Jetson (Orin NANO, AGX Orin)",
                  "ESP-IDF (I2C / UART Interfaces)",
                  "Langflow & n8n (AI Workflow Automation)",
                  "Linux / Windows / macOS",
                ].map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{
                      transition: "transform 0.2s ease",
                      "&:hover": { transform: "translateX(6px)" },
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "primary.light",
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #005461, #018790)",
          color: "#fff",
          py: 5,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AnimatedOrb
          size={250}
          top="-40%"
          left="80%"
          delay={1}
          color="rgba(255,255,255,0.03)"
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <FadeInSection>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
              Let&apos;s Build Something Amazing
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.85, mb: 3 }}>
              Open to collaborations, consulting, and exciting AI projects.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                startIcon={<Email />}
                href="mailto:williamkrin0811@gmail.com"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.3)",
                    transform: "scale(1.05)",
                  },
                  px: 3.5,
                  transition: "all 0.2s ease",
                }}
              >
                Get in Touch
              </Button>
              <IconButton
                href="https://linkedin.com/in/william-chung-91a08a253/"
                target="_blank"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                    transform: "scale(1.15) rotate(5deg)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://github.com/Krinkrinnnnn"
                target="_blank"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                    transform: "scale(1.15) rotate(-5deg)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <GitHub />
              </IconButton>
            </Stack>
            <Typography variant="body2" sx={{ mt: 4, opacity: 0.6 }}>
              &copy; {new Date().getFullYear()} William Chung. All rights
              reserved.
            </Typography>
          </FadeInSection>
        </Container>
      </Box>
    </Box>
  );
}
