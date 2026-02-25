import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Banner Skeleton */}
      <Skeleton className="h-48 w-full rounded-2xl bg-slate-800" />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Cards Skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-32 bg-slate-800" />
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-[#1E293B] border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-12 w-12 rounded-lg bg-slate-700" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-40 bg-slate-700" />
                      <Skeleton className="h-4 w-32 bg-slate-700" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-2 w-full bg-slate-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {/* Streak Widget Skeleton */}
          <Card className="bg-[#1E293B] border-slate-700">
            <CardHeader>
              <Skeleton className="h-6 w-24 bg-slate-700" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-20 w-full bg-slate-700" />
              <Skeleton className="h-10 w-full bg-slate-700" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function CourseCardSkeleton() {
  return (
    <Card className="bg-[#1E293B] border-slate-700">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Skeleton className="h-16 w-16 rounded-xl bg-slate-700" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-6 w-3/4 bg-slate-700" />
            <Skeleton className="h-4 w-full bg-slate-700" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 bg-slate-700" />
          <Skeleton className="h-6 w-16 bg-slate-700" />
        </div>
        <Skeleton className="h-2 w-full bg-slate-700" />
      </CardContent>
    </Card>
  );
}

export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3"
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div
        className={`${sizeClasses[size]} border-[#4F46E5] border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
}
