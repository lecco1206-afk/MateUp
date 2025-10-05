import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2, Megaphone } from "lucide-react";

const formSchema = z.object({
  companyName: z.string().min(2, "기업명을 입력해주세요"),
  ceoName: z.string().min(2, "대표자명을 입력해주세요"),
  phone: z.string().min(10, "전화번호를 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
});

const benefits = [
  "월 평균 10,000+ 대학생 방문",
  "공모전 참가자 직접 타겟팅",
  "합리적인 광고 비용",
  "전문 상담 지원",
];

export default function AdvertiserSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      ceoName: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Advertiser form submitted:", values);
    alert("광고 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다!");
    form.reset();
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                대학생 공모전 참가자에게
                <br />
                <span className="text-primary">직접 홍보</span>하세요
              </h2>
              <p className="text-xl text-muted-foreground">
                MateUp을 통해 적극적이고 열정적인 대학생들에게
                귀사의 서비스를 알려보세요.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Megaphone className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">광고 신청</h3>
              </div>
              <p className="text-muted-foreground">
                간단한 정보를 입력하시면 담당자가 연락드립니다
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>기업명</FormLabel>
                      <FormControl>
                        <Input placeholder="(주)○○컴퍼니" {...field} data-testid="input-company-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ceoName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>대표자명</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} data-testid="input-ceo-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>전화번호</FormLabel>
                      <FormControl>
                        <Input placeholder="02-1234-5678" {...field} data-testid="input-advertiser-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="contact@company.com" {...field} data-testid="input-advertiser-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full text-lg h-12"
                  data-testid="button-submit-advertiser"
                >
                  광고 신청하기
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}
