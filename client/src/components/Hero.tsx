import { Button } from "@/components/ui/button";
import { Sparkles, Users, Target } from "lucide-react";

export default function Hero({ onScrollToForm }: { onScrollToForm: () => void }) {
  return (
    <section className="relative min-h-[600px] flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>2024년 1,000개 이상 팀 매칭 성공</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              완벽한 팀메이트를
              <br />
              <span className="text-primary">찾아보세요</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              공모전, 프로젝트 할 때마다 팀원 찾기 힘드셨죠?
              <br />
              MateUp에서 신뢰할 수 있는 팀원을 만나보세요.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={onScrollToForm}
                data-testid="button-find-team"
              >
                <Users className="w-5 h-5 mr-2" />
                팀원 찾기
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                data-testid="button-learn-more"
              >
                더 알아보기
              </Button>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 via-chart-2/20 to-chart-3/20 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-6">
                <Target className="w-32 h-32 mx-auto text-primary" />
                <div className="space-y-2">
                  <p className="text-2xl font-bold">함께하면 더 강해집니다</p>
                  <p className="text-muted-foreground">대학생들의 협업 플랫폼</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
