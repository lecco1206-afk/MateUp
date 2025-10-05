import { Mail, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">MateUp</h3>
            <p className="text-muted-foreground">
              대학생을 위한 팀 빌딩 플랫폼
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">빠른 링크</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">서비스 소개</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">팀원 찾기</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">광고 문의</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">문의하기</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@mateup.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 MateUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
