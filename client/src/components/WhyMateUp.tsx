import { Shield, Zap, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "신뢰할 수 있는 팀원",
    description: "익명 평가 시스템으로 검증된 팀원들과 함께 프로젝트를 진행하세요.",
  },
  {
    icon: Star,
    title: "투명한 평가 시스템",
    description: "협업 종료 후 서로를 평가하여 더 나은 팀 문화를 만들어가요.",
  },
  {
    icon: Zap,
    title: "빠른 매칭",
    description: "원하는 분야의 팀원을 빠르게 찾고 바로 프로젝트를 시작하세요.",
  },
];

export default function WhyMateUp() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            왜 <span className="text-primary">MateUp</span>인가요?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            대학생 팀 빌딩의 새로운 기준을 만들어갑니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`card-feature-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
