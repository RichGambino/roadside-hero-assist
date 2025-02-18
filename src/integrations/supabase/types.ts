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
      comment_likes: {
        Row: {
          comment_id: string | null
          created_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          comment_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          comment_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comment_likes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          likes: number | null
          post_id: string
          user_id: string | null
          username: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          likes?: number | null
          post_id: string
          user_id?: string | null
          username?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          likes?: number | null
          post_id?: string
          user_id?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_affirmations: {
        Row: {
          content: string
          created_at: string
          id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      gratitude_entries: {
        Row: {
          content: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      joy_moments: {
        Row: {
          content: string
          created_at: string
          id: string
          media_url: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          media_url?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          media_url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      kindness_actions: {
        Row: {
          action: string
          created_at: string
          id: string
          impact_count: number | null
          user_id: string
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          impact_count?: number | null
          user_id: string
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          impact_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      listings: {
        Row: {
          category: string | null
          condition: Database["public"]["Enums"]["item_condition"] | null
          created_at: string | null
          description: string | null
          id: string
          listing_type: Database["public"]["Enums"]["listing_type"] | null
          location: string | null
          price: number | null
          status: string | null
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          category?: string | null
          condition?: Database["public"]["Enums"]["item_condition"] | null
          created_at?: string | null
          description?: string | null
          id?: string
          listing_type?: Database["public"]["Enums"]["listing_type"] | null
          location?: string | null
          price?: number | null
          status?: string | null
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string | null
          condition?: Database["public"]["Enums"]["item_condition"] | null
          created_at?: string | null
          description?: string | null
          id?: string
          listing_type?: Database["public"]["Enums"]["listing_type"] | null
          location?: string | null
          price?: number | null
          status?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      login_history: {
        Row: {
          id: string
          ip_address: string | null
          login_timestamp: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          id?: string
          ip_address?: string | null
          login_timestamp?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          id?: string
          ip_address?: string | null
          login_timestamp?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      love_language_results: {
        Row: {
          id: string
          primary_language: Database["public"]["Enums"]["love_language"]
          quiz_date: string
          secondary_language:
            | Database["public"]["Enums"]["love_language"]
            | null
          user_id: string
        }
        Insert: {
          id?: string
          primary_language: Database["public"]["Enums"]["love_language"]
          quiz_date?: string
          secondary_language?:
            | Database["public"]["Enums"]["love_language"]
            | null
          user_id: string
        }
        Update: {
          id?: string
          primary_language?: Database["public"]["Enums"]["love_language"]
          quiz_date?: string
          secondary_language?:
            | Database["public"]["Enums"]["love_language"]
            | null
          user_id?: string
        }
        Relationships: []
      }
      love_maps: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          latitude: number
          longitude: number
          name: string
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          latitude: number
          longitude: number
          name: string
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          latitude?: number
          longitude?: number
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      love_tokens: {
        Row: {
          balance: number | null
          id: string
          last_updated: string
          total_earned: number | null
          user_id: string
        }
        Insert: {
          balance?: number | null
          id?: string
          last_updated?: string
          total_earned?: number | null
          user_id: string
        }
        Update: {
          balance?: number | null
          id?: string
          last_updated?: string
          total_earned?: number | null
          user_id?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          listing_id: string | null
          read_at: string | null
          receiver_id: string | null
          sender_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          listing_id?: string | null
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          listing_id?: string | null
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      offers: {
        Row: {
          amount: number | null
          buyer_id: string | null
          created_at: string | null
          id: string
          listing_id: string | null
          message: string | null
          seller_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          buyer_id?: string | null
          created_at?: string | null
          id?: string
          listing_id?: string | null
          message?: string | null
          seller_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          buyer_id?: string | null
          created_at?: string | null
          id?: string
          listing_id?: string | null
          message?: string | null
          seller_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "offers_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          status: Database["public"]["Enums"]["payment_status"] | null
          stripe_session_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          status?: Database["public"]["Enums"]["payment_status"] | null
          stripe_session_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          status?: Database["public"]["Enums"]["payment_status"] | null
          stripe_session_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          comments: number | null
          content: string
          created_at: string
          destination: string | null
          id: string
          is_mobile: boolean | null
          is_video: boolean | null
          likes: number | null
          media_url: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          comments?: number | null
          content: string
          created_at?: string
          destination?: string | null
          id?: string
          is_mobile?: boolean | null
          is_video?: boolean | null
          likes?: number | null
          media_url?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          comments?: number | null
          content?: string
          created_at?: string
          destination?: string | null
          id?: string
          is_mobile?: boolean | null
          is_video?: boolean | null
          likes?: number | null
          media_url?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          email: string
          id: string
          is_verified: boolean | null
          name: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email: string
          id: string
          is_verified?: boolean | null
          name?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string
          id?: string
          is_verified?: boolean | null
          name?: string | null
        }
        Relationships: []
      }
      token_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string
          id: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          description: string
          id?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_interests: {
        Row: {
          created_at: string
          id: string
          interest: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          interest: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interest?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      item_condition: "new" | "like_new" | "good" | "fair" | "poor"
      listing_type: "fixed_price" | "auction" | "trade"
      love_language:
        | "words_of_affirmation"
        | "acts_of_service"
        | "receiving_gifts"
        | "quality_time"
        | "physical_touch"
      payment_status: "pending" | "completed" | "failed"
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

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
