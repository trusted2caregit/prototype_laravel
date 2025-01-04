<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Task::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        // Apply filters
        if ($name = $request->input("name")) {
            $query->where("name", "like", "%" . $name . "%");
        }
        if ($status = $request->input("status")) {
            $query->where("status", $status);
        }

        // Paginate results
        $tasks = $query->orderBy($sortField, $sortDirection) 
        ->paginate(10)
        ->onEachSide(1);

        // Return response with data
        return inertia("Task/Index", [
            'tasks' => TaskResource::collection($tasks),
            'queryParams' => $request->query() ?: null, // Use null if no query params exist
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }
}
