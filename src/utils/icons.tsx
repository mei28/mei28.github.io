import React from 'react';
import {
  Github, Twitter, Linkedin, FileText, Mail, GraduationCap,
  Search, Users, ArrowRight, ArrowLeft, Menu, X, Sun, Moon,
  Bookmark, Image as LucideImage, Play, Video, Globe, Presentation,
  User,
} from 'lucide-react';

const lucideIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github,
  Twitter,
  Linkedin,
  FileText,
  Mail,
  GraduationCap,
  Search,
  Users,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Sun,
  Moon,
  Bookmark,
  Image: LucideImage,
  Play,
  Video,
  Globe,
  Presentation,
  User,
};

export function getLucideIcon(name: string) {
  return lucideIconMap[name] ?? null;
}

export function getLinkIcon(label: string) {
  switch (label.toLowerCase()) {
    case 'paper': return FileText;
    case 'poster': return LucideImage;
    case 'demo': return Play;
    case 'slides':
    case 'slide': return Presentation;
    case 'video': return Video;
    case 'hp': return Globe;
    default: return Bookmark;
  }
}
