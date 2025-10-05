import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Plus, X, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  school: z.string().min(2, "학교명을 입력해주세요"),
  department: z.string().min(2, "학과를 입력해주세요"),
  studentId: z.string().min(4, "학번을 입력해주세요"),
  phone: z.string().min(10, "전화번호를 입력해주세요"),
  projectName: z.string().min(2, "프로젝트/공모전 이름을 입력해주세요"),
  introduction: z.string().min(20, "최소 20자 이상 입력해주세요"),
});

const defaultFields = ["기획", "디자인", "개발", "마케팅"];

export default function TeamRecruitmentForm() {
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [customField, setCustomField] = useState("");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      school: "",
      department: "",
      studentId: "",
      phone: "",
      projectName: "",
      introduction: "",
    },
  });

  const toggleField = (field: string) => {
    setSelectedFields(prev => 
      prev.includes(field) 
        ? prev.filter(f => f !== field)
        : [...prev, field]
    );
  };

  const addCustomField = () => {
    if (customField.trim() && !selectedFields.includes(customField.trim())) {
      setSelectedFields([...selectedFields, customField.trim()]);
      setCustomField("");
    }
  };

  const removeField = (field: string) => {
    setSelectedFields(prev => prev.filter(f => f !== field));
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", { ...values, recruitmentFields: selectedFields });
    alert("팀원 모집 신청이 완료되었습니다!");
    form.reset();
    setSelectedFields([]);
  };

  return (
    <section id="recruitment-form" className="py-24 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            지금 <span className="text-primary">팀원</span>을 모집해보세요
          </h2>
          <p className="text-lg text-muted-foreground">
            간단한 정보만 입력하면 바로 시작할 수 있어요
          </p>
        </div>

        <Card className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} data-testid="input-name" />
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
                        <Input type="email" placeholder="example@university.ac.kr" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="school"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>학교명</FormLabel>
                      <FormControl>
                        <Input placeholder="○○대학교" {...field} data-testid="input-school" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>학과</FormLabel>
                      <FormControl>
                        <Input placeholder="컴퓨터공학과" {...field} data-testid="input-department" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>학번</FormLabel>
                      <FormControl>
                        <Input placeholder="20241234" {...field} data-testid="input-studentid" />
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
                        <Input placeholder="010-1234-5678" {...field} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>프로젝트/공모전 이름</FormLabel>
                    <FormControl>
                      <Input placeholder="2024 대학생 창업 경진대회" {...field} data-testid="input-project" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-3">
                <FormLabel>모집 분야</FormLabel>
                <div className="flex flex-wrap gap-2">
                  {defaultFields.map(field => (
                    <Badge
                      key={field}
                      variant={selectedFields.includes(field) ? "default" : "outline"}
                      className="cursor-pointer hover-elevate"
                      onClick={() => toggleField(field)}
                      data-testid={`badge-field-${field}`}
                    >
                      {field}
                    </Badge>
                  ))}
                  {selectedFields
                    .filter(f => !defaultFields.includes(f))
                    .map(field => (
                      <Badge
                        key={field}
                        variant="default"
                        className="cursor-pointer hover-elevate gap-1"
                        data-testid={`badge-custom-${field}`}
                      >
                        {field}
                        <X 
                          className="w-3 h-3" 
                          onClick={(e) => {
                            e.stopPropagation();
                            removeField(field);
                          }}
                        />
                      </Badge>
                    ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="직접 입력 (예: 영상편집)"
                    value={customField}
                    onChange={(e) => setCustomField(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomField())}
                    data-testid="input-custom-field"
                  />
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="outline"
                    onClick={addCustomField}
                    data-testid="button-add-field"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <FormField
                control={form.control}
                name="introduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>간단한 소개 및 목표</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="어떤 프로젝트인지, 어떤 팀원을 찾고 계신지 자유롭게 작성해주세요."
                        className="min-h-32"
                        {...field}
                        data-testid="input-introduction"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full text-lg h-12"
                data-testid="button-submit-recruitment"
              >
                <Send className="w-5 h-5 mr-2" />
                팀원 모집 신청하기
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
