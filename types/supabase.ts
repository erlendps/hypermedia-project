export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Person: {
        Row: {
          education: string
          expertise: string[]
          firstName: string
          lastName: string
          mainRole: string
          pastExperience: string
          personId: string
          picture: string
          slug: string
        }
        Insert: {
          education?: string
          expertise?: string[]
          firstName?: string
          lastName?: string
          mainRole?: string
          pastExperience?: string
          personId?: string
          picture?: string
          slug?: string
        }
        Update: {
          education?: string
          expertise?: string[]
          firstName?: string
          lastName?: string
          mainRole?: string
          pastExperience?: string
          personId?: string
          picture?: string
          slug?: string
        }
        Relationships: []
      }
      Project: {
        Row: {
          description: string
          name: string
          personId: string | null
          picture: string
          projectId: string
          slug: string
        }
        Insert: {
          description?: string
          name?: string
          personId?: string | null
          picture?: string
          projectId?: string
          slug?: string
        }
        Update: {
          description?: string
          name?: string
          personId?: string | null
          picture?: string
          projectId?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "Project_personId_fkey"
            columns: ["personId"]
            isOneToOne: false
            referencedRelation: "Person"
            referencedColumns: ["personId"]
          },
        ]
      }
      Service: {
        Row: {
          availability: string
          description: string
          duration: string
          name: string
          otherInformation: string | null
          personId: string | null
          picture: string
          serviceId: string
          slug: string
        }
        Insert: {
          availability?: string
          description?: string
          duration?: string
          name?: string
          otherInformation?: string | null
          personId?: string | null
          picture?: string
          serviceId?: string
          slug?: string
        }
        Update: {
          availability?: string
          description?: string
          duration?: string
          name?: string
          otherInformation?: string | null
          personId?: string | null
          picture?: string
          serviceId?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "Service_personId_fkey"
            columns: ["personId"]
            isOneToOne: false
            referencedRelation: "Person"
            referencedColumns: ["personId"]
          },
        ]
      }
      Testimonial: {
        Row: {
          endorser: string
          serviceId: string
          testimonialId: string
          testimonialText: string
        }
        Insert: {
          endorser?: string
          serviceId: string
          testimonialId?: string
          testimonialText?: string
        }
        Update: {
          endorser?: string
          serviceId?: string
          testimonialId?: string
          testimonialText?: string
        }
        Relationships: [
          {
            foreignKeyName: "Testimonial_serviceId_fkey"
            columns: ["serviceId"]
            isOneToOne: false
            referencedRelation: "Service"
            referencedColumns: ["serviceId"]
          },
        ]
      }
      TimelineEvent: {
        Row: {
          date: string
          eventInfo: string
          projectId: string
          timelineEventId: string
        }
        Insert: {
          date: string
          eventInfo?: string
          projectId: string
          timelineEventId?: string
        }
        Update: {
          date?: string
          eventInfo?: string
          projectId?: string
          timelineEventId?: string
        }
        Relationships: [
          {
            foreignKeyName: "TimelineEvent_projectId_fkey"
            columns: ["projectId"]
            isOneToOne: false
            referencedRelation: "Project"
            referencedColumns: ["projectId"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
