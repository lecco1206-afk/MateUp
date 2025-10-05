import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogOut, Users, Megaphone } from "lucide-react";
import { useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      setLocation("/admin");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setLocation("/admin");
  };

  const teamRecruitments = [
    {
      id: 1,
      name: "김철수",
      email: "chulsoo@university.ac.kr",
      school: "서울대학교",
      department: "컴퓨터공학과",
      studentId: "20241234",
      phone: "010-1234-5678",
      recruitmentFields: ["개발", "디자인"],
      projectName: "AI 기반 학습 플랫폼",
      createdAt: "2024-10-05",
    },
    {
      id: 2,
      name: "이영희",
      email: "younghee@university.ac.kr",
      school: "연세대학교",
      department: "경영학과",
      studentId: "20235678",
      phone: "010-2345-6789",
      recruitmentFields: ["기획", "마케팅"],
      projectName: "대학생 창업 경진대회",
      createdAt: "2024-10-04",
    },
  ];

  const advertiserApplications = [
    {
      id: 1,
      companyName: "(주)테크스타트",
      ceoName: "박준형",
      phone: "02-1234-5678",
      email: "contact@techstart.com",
      createdAt: "2024-10-05",
    },
    {
      id: 2,
      companyName: "(주)이노베이션",
      ceoName: "최민수",
      phone: "02-2345-6789",
      email: "info@innovation.com",
      createdAt: "2024-10-03",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">MateUp</h1>
            <Badge variant="secondary">관리자</Badge>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 py-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">관리자 대시보드</h2>
          <p className="text-muted-foreground">모든 신청 현황을 확인하고 관리하세요</p>
        </div>

        <Tabs defaultValue="teams" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="teams" data-testid="tab-teams">
              <Users className="w-4 h-4 mr-2" />
              팀 빌딩 신청
            </TabsTrigger>
            <TabsTrigger value="advertisers" data-testid="tab-advertisers">
              <Megaphone className="w-4 h-4 mr-2" />
              광고주 신청
            </TabsTrigger>
          </TabsList>

          <TabsContent value="teams" className="space-y-4">
            <Card>
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">팀 빌딩 신청 현황</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  총 {teamRecruitments.length}건의 신청
                </p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>이름</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>학교</TableHead>
                      <TableHead>학과</TableHead>
                      <TableHead>모집분야</TableHead>
                      <TableHead>프로젝트명</TableHead>
                      <TableHead>신청일</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamRecruitments.map((recruitment) => (
                      <TableRow key={recruitment.id} data-testid={`row-team-${recruitment.id}`}>
                        <TableCell className="font-medium">{recruitment.name}</TableCell>
                        <TableCell>{recruitment.email}</TableCell>
                        <TableCell>{recruitment.school}</TableCell>
                        <TableCell>{recruitment.department}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {recruitment.recruitmentFields.map((field, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {field}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{recruitment.projectName}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {recruitment.createdAt}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="advertisers" className="space-y-4">
            <Card>
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">광고주 신청 현황</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  총 {advertiserApplications.length}건의 신청
                </p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>기업명</TableHead>
                      <TableHead>대표자명</TableHead>
                      <TableHead>전화번호</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>신청일</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {advertiserApplications.map((app) => (
                      <TableRow key={app.id} data-testid={`row-advertiser-${app.id}`}>
                        <TableCell className="font-medium">{app.companyName}</TableCell>
                        <TableCell>{app.ceoName}</TableCell>
                        <TableCell>{app.phone}</TableCell>
                        <TableCell>{app.email}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {app.createdAt}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
