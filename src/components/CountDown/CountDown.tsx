// React
import { useState, useEffect, useRef } from "react";

// Styles
import "./styles/countDown.css";

// Components
import ModalEaster from "./components/ModalEaster";
import { Box } from "@mui/material";
import { HelpCircle } from "lucide-react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountDownProps {
    targetDate?: Date;
    title?: string;
    subtitle?: string;
    onFinished?: () => void;
}

function Chip({ label }: { label: string }) {
    return <span className="cd-chip">{label}</span>;
}

function DigitComponent({ value }: { value: number }) {
    return (
        <span className="cd-digit">
            {String(value).padStart(2, "0")}
        </span>
    );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
    return (
        <div className="cd-block">
            <div className="cd-digit-box">
                <DigitComponent value={value} />
            </div>
            <span className="cd-label">{label}</span>
        </div>
    );
}

function getTimeLeft(target: Date): TimeLeft {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff / 3_600_000) % 24),
        minutes: Math.floor((diff / 60_000) % 60),
        seconds: Math.floor((diff / 1_000) % 60),
    };
}

export default function CountDown({
    targetDate = new Date("2026-03-05T00:00:00"),
    title = "Cuenta Regresiva",
    subtitle,
    onFinished,
}: CountDownProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
        getTimeLeft(targetDate)
    );
    const [clickCount, setClickCount] = useState(0);
    const [openEasterEgg, setOpenEasterEgg] = useState(false);
    const [openRick, setOpenRick] = useState(false);
    const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const calledRef = useRef(false);

    const handleSecretClick = () => {
        if (clickTimeoutRef.current) {
            clearTimeout(clickTimeoutRef.current);
        }

        const newCount = clickCount + 1;
        setClickCount(newCount);

        clickTimeoutRef.current = setTimeout(() => {
            setClickCount(0);
        }, 1500);

        if (newCount >= 3) {
            setOpenEasterEgg(true);
            setOpenRick(true);
            setClickCount(0);
        }
    };

    const finished = Object.values(timeLeft).every((v) => v === 0);

    useEffect(() => {
        const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    useEffect(() => {
        if (finished && !calledRef.current) {
            calledRef.current = true;
            const t = setTimeout(() => onFinished?.(), 1200);
            return () => clearTimeout(t);
        }
    }, [finished, onFinished]);

    const dateLabel = targetDate.toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="cd-container">
            <Chip label="En desarrollo V.2" />

            <h1 className="cd-title" onClick={handleSecretClick} style={{ cursor: "pointer" }}>
                {title}
            </h1>

            <Box display={"flex"} justifyContent="center" alignItems={"center"} gap={1} flexDirection={{xs: 'column', md: 'row'}}>
                <p className="cd-subtitle">{subtitle}</p>
                <Box display={"flex"} alignItems={"center"}>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", gap: "4px" }}
                    >
                        {openRick && <HelpCircle size={24} color="white" />}
                    </a>
                </Box>
            </Box>

            <p className="cd-subtitle-date">{dateLabel}</p>

            <div className="cd-grid">
                <TimeBlock value={timeLeft.days} label="Días" />
                <span className="cd-sep">:</span>
                <TimeBlock value={timeLeft.hours} label="Horas" />
                <span className="cd-sep">:</span>
                <TimeBlock value={timeLeft.minutes} label="Minutos" />
                <span className="cd-sep">:</span>
                <TimeBlock value={timeLeft.seconds} label="Segundos" />
            </div>

            <ModalEaster open={openEasterEgg} onClose={() => setOpenEasterEgg(false)} />
        </div>
    );
}